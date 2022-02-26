import Header from "../Components/Header"

function Orders() {

    return (
        <div className="container-fluid" style={{minHeight: '45rem'}}>
            <div className="row">
                <div className="col-md-2 border-end border-secondary" style={{minHeight: '45rem', maxWidth: '12rem'}}>
                    <Header />
                </div>
                <div className="col-md-10">
                    Hello
                </div>
            </div>
        </div>
    )
}

export default Orders