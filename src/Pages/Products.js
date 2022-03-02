import { useState } from "react"
import getProducts from "../API/getProducts"
import Header from "../Components/Header"

function Products() {
    const [products, setProducts] = useState(getProducts())

    const deleteProduct = (productIndex) => {
        products.splice(productIndex, 1)
        setProducts([...products])
    }
    const [startList, setStartList] = useState(0)
    const endList = startList + 5

    const moveLeft = () => {
        let nextSelected = startList - 5
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setStartList(nextSelected)
    }
    const moveRight = () => {
        let nextSelected = startList + 5
        if (nextSelected > 15) {
            nextSelected = 15
        }
        setStartList(nextSelected)
    }
    const changePageOne = () => {
        setStartList(0)
    }
    const changePageTwo = () => {
        setStartList(5)
    }
    const changePageThree = () => {
        setStartList(10)
    }
    const changePageFour = () => {
        setStartList(15)
    }
   

    const productList = products.slice(startList, endList).map((product, index) => {
        let productDiscount = product.price - (product.price * .2)
        return (
            
                <tr>
                <th scope="row"><img src={product.image} className="img-thumbnail" style={{width:100}} alt="..."/></th>
                <td className="align-middle text-center">{product.number}</td>
                <td className="align-middle text-center">{product.title}</td>
                <td className="align-middle text-justify">{product.describtione}</td>
                <td className="align-middle text-center">{product.price} &#8364;</td>
                <td className="align-middle text-center">{productDiscount} &#8364;</td>
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
        <div className="container-fluid d-flex mb-3" style={{ minHeight: '93.8vh' }}>
            <div className="col-md-2 border-end border-secondary" style={{ minHeight: '45rem', maxWidth: '12rem' }}>
                <Header />
            </div>
            <div className="col-md-10">
                <div className="d-inline-flex flex-column align-items-end w-100">
                    <button className="my-3" style={{ width: "200px" }}>Create category</button>
                    <p className="my-3">Search <input type="text" /></p>
                </div>
                <div className="container">
                    <table className="table table-hover">
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
                    <div className="row">
                        <div className="col">
                            <div className="btn-group float-end" role="group" aria-label="Basic outlined example">
                                <button onClick={() => moveLeft(startList)} type="button" class="btn btn-outline-secondary">«</button>
                                <button onClick={() => changePageOne(startList)} type="button" class="btn btn-outline-secondary">1</button>
                                <button onClick={() => changePageTwo(startList)} type="button" class="btn btn-outline-secondary">2</button>
                                <button onClick={() => changePageThree(startList)} type="button" class="btn btn-outline-secondary">3</button>
                                <button onClick={() => changePageFour(startList)} type="button" class="btn btn-outline-secondary">4</button>
                                <button onClick={() => moveRight(startList)} type="button" class="btn btn-outline-secondary">»</button>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Products