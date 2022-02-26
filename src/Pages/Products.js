import { useState } from "react"
import getProducts from "../API/getProducts"

function Products() {
    const [products, setProducts] = useState(getProducts())

    const deleteProduct = (productIndex) => {
        products.splice(productIndex, 1)
        setProducts([...products])
    }
    const [startList, setStartList] = useState(0)
    const endList = startList + 5
   

    const productList = products.slice(startList, endList).map((product, index) => {
        return (
            
                <tr>
                <th scope="row"><img src={product.image} className="img-thumbnail" style={{width:100}} alt="..."/></th>
                <td className="align-middle text-center">{index}</td>
                <td className="align-middle text-center">{product.title}</td>
                <td className="align-middle text-justify">{product.describtione}</td>
                <td className="align-middle text-center">{product.price}</td>
                <td className="align-middle text-center">{product.discountPrice}</td>
                <td className="align-middle text-center">
                    <div className="d-flex">
                    <button type="button" className="btn btn-light"style={{margin:'5px'}}>Edit</button>
                    <button onClick={() => deleteProduct(index)} type="button" className="btn btn-light" style={{margin:'5px'}}>Delete</button>
                    </div>
                    </td>
                </tr>
           
        )
    })

    return (
        <div className="container">
            <div className="d-inline-flex flex-column align-items-end w-100">
                <button className="my-3" style={{ width: "200px" }}>Create category</button>
                <p className="my-3">Search <input type="text" /></p>
            </div>
            <table className="table  table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                        {productList}
                  
                </tbody>
            </table>
            <nav className="navbar" aria-label="Page navigation example">
                <ul className="pagination ms-auto">
                    <li className="page-item"><a class="page-link" href="#">«</a></li>
                    <li className="page-item"><a class="page-link" href="#">1</a></li>
                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                    <li className="page-item"><a class="page-link" href="#">»</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Products