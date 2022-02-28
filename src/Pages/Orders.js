import { useState } from "react"
import getOrders from "../API/getOrders"
import Header from "../Components/Header"

function Orders() {

 
    const [customers, setCustomers] = useState(getOrders())

    const deleteOrder = (orderIndex) => {
        customers.splice(orderIndex, 1)
        setCustomers([...customers])
    }
    const customersList = customers.map((order, index) => {
        return (
            <tr key={index} className="align-middle">
                <th scope="row">{order.ID}</th>
                <td>
                    <div className="row">
                        {order.CustomerName}
                    </div>
                    <div className="row">
                        {order.Street}
                    </div>
                    <div className="row">
                        {order.Post}
                    </div>
                    <div className="row">
                        {order.City}
                    </div>
                    <div className="row">
                        {order.Country}
                    </div>
                </td>
                <td>{order.Quantity}</td>
                <td>{order.Price}</td>
                <td>{order.VAT}</td>
                <td>{order.Total}</td>
                <td>{order.Status}</td>
                <td></td>
                <td>
                    <button type="button" classname="btn btn-primary" onClick={() => deleteOrder(index)}>Delete</button></td>
            </tr>
        )

    })

    return (
        <div className="container-fluid" style={{ minHeight: '45rem' }}>
            <div className="row">
                <div className="col-md-2 border-end border-secondary" style={{ minHeight: '45rem', maxWidth: '12rem' }}>
                    <Header />
                </div>
                <div className="col-md-10">
                    <div className="row justify-content-start">
                        <div className="col-md-2">
                            Categories
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-md-2">
                            Search
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-hover">
                                <thead>
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