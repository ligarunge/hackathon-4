import getProducts from "../API/getProducts"

function Products() {
    const products = getProducts()

    const productList = products.map((product, index) => {
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
                    <button type="button" className="btn btn-light"style={{margin:'5px'}}>Edit</button><button type="button" className="btn btn-light" style={{margin:'5px'}}>Delete</button>
                    </div>
                    </td>
                </tr>
           
        )
    })

    return (
        <div className="container">
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
        </div>
    )
}

export default Products