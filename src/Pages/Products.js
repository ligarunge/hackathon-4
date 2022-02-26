import getProducts from "../API/getProducts"

function Products() {
    const products = getProducts()

    const productList = products.map((product, index) => {
        return (
            
                <tr>
                <th scope="row"><img src={product.image} className="img-thumbnail" style={{width:100}} alt="..."/></th>
                <td>{index}</td>
                <td>{product.title}</td>
                <td>{product.describtione}</td>
                <td>{product.price}</td>
                <td>{product.discountPrice}</td>
                <td className="d-flex h-100"><button type="button" className="btn btn-light">Edit</button><button type="button" className="btn btn-light">Delete</button></td>
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