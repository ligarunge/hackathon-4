import { useState } from "react"
import getOrders from "../API/getOrders"
import Header from "../Components/Header"

function Orders() {


    const [customers, setCustomers] = useState(getOrders())
    const [keyWord, setKeyWord] = useState('')


    const deleteOrder = (orderIndex) => {
        customers.splice(orderIndex, 1)
        setCustomers([...customers])
    }
    const customersList = customers
        .filter(order => keyWord === '' ||
            order.Country.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()) ||
            order.CustomerName.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()) ||
            order.Surname.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()) ||
            order.City.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()) ||
            order.Street.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()) ||
            order.Quantity.includes(keyWord) ||
            order.Status.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
        .map((order, index) => {

            return (
                <tr key={index} className="align-middle">
                    <th scope="row" style={{color: 'rgb(50, 105, 84)'}}>{order.ID}</th>
                    <td>
                        <div className="row fst-italic">
                            {order.CustomerName} {order.Surname}
                        </div>
                        <div className="row">
                            {order.Street}
                        </div>
                        <div className="row">
                            {order.City}
                        </div>
                        <div className="row">
                            {order.Country}
                        </div>
                    </td>
                    <td>{order.Quantity}</td>
                    <td>€{order.Price}</td>
                    <td>€{(order.Price * 0.21).toFixed(2)}</td>
                    <td>€{parseFloat(order.Price*1.21*order.Quantity).toFixed(2)}</td>
                    <td><span className="badge rounded-pill bg-light" style={{ color: order.color, borderColor: order.color }}>{order.Status}</span></td>
                    <td>
                        <button type="button" className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg></button>
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={() => deleteOrder(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg></button></td>
                </tr>
            )
        })

    return (
        <div className="container-fluid" style={{ minHeight: '45rem', backgroundImage: "url(/Images/plants2.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="row">
                <div className="col-md-2 border-end border-secondary" style={{ minHeight: '45rem', maxWidth: '12rem' }}>
                    <Header />
                </div>
                <div className="col-md-10">
                    <div className="row justify-content-start m-2">
                        <div className="col-md-2">
                            Categories
                        </div>
                    </div>
                    <div className="row justify-content-end align-middle">
                        <div className="col-md-3">
                            <input
                                type="text"
                                value={keyWord}
                                onChange={(event) => setKeyWord(event.target.value)} />
                            <span className="m-3" style={{ color: 'rgb(50, 105, 84)' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-hover m-3">
                                <thead style={{color: 'rgb(50, 105, 84)'}}>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">VAT</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customersList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders