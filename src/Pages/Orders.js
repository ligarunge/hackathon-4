import { useState } from "react"
import getOrders from "../API/getOrders"
import Header from "../Components/Header"

function Orders() {

 
    const [customers, setCustomers] = useState(getOrders())
    const [keyWord, setKeyWord] = useState('')
    const searchOrder = () => {
        console.log(keyWord)
        customers.filter(people => people.Country === keyWord).map(filteredOrder => (
         setCustomers(filteredOrder)
        ))
    }

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
                <td>
                    <button type="button" className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => deleteOrder(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button></td>
            </tr>
        )

    })

    return (
        <div className="container-fluid" style={{ minHeight: '45rem', backgroundImage: "url(/Images/plants2.jpg)", backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
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
                        <input 
                type="text" 
                value={keyWord} 
                onChange={(event) => setKeyWord(event.target.value)}/>
		    <button 
                className="btn btn-secondary m-1" 
                onClick={searchOrder}>Search</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-hover m-3">
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