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
   

    const productList = products
        .slice(startList, endList)
        .map((product, index) => {
            return (

                <tr>
                    <th scope="row"><img src={product.image} style={{ width: 100 }} alt="..." /></th>
                    <td className="align-middle text-center">{product.number}</td>
                    <td className="align-middle text-center">{product.title}</td>
                    <td className="align-middle text-justify">{product.describtione}</td>
                    <td className="align-middle text-center">{product.price} &#8364;</td>
                    <td className="align-middle text-center">{product.price - (product.price * .2)} &#8364;</td>
                    <td className="align-middle text-center">
                        <div className="d-flex">
                            <button type="button" className="btn btn-light" style={{ margin: '5px' }}>Edit</button>
                            <button onClick={() => deleteProduct(index)} type="button" className="btn btn-light" style={{ margin: '5px' }}>Delete</button>
                        </div>
                    </td>
                </tr>

            )
        })

    return (
        <div className="container-fluid d-flex mb-3" style={{ minHeight: '93.8vh', backgroundImage: "url(/Images/plants2.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="col-md-2 border-end border-secondary" style={{ minHeight: '45rem', maxWidth: '12rem' }}>
                <Header />
            </div>
            <div className="col-md-10">
                <div className="row justify-content-end align-middle">
                <div className="col-md-3">
                    <button className="my-3" style={{ width: "200px", color: 'rgb(50, 105, 84)' }}>Create category</button>
                    <input 
                        style={{ margin: '10px' }} 
                        type="text"/>
                    <span className="my-3" style={{ color: 'rgb(50, 105, 84)' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></span>
                    </div>
                </div>
                <div className="container">
                    <table className="table table-hover">
                        <thead style={{color: 'rgb(50, 105, 84)'}}>
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