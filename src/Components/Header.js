import { Link } from "react-router-dom"

function Header() {

    return (
        <div style={{minHeight: '45rem'}}>
            <nav className="nav flex-column">
                <Link className="nav-link" to={'/'}>
                    <img src="/Images/cat_logo.png" className="img-fluid" style={{ height: '8rem' }} alt="cat_logo" />
                </Link>
                <Link className="nav-link lead" style={{fontWeight:'bold', color:'grey'}} to={'/categories'}>Categories</Link>
                <Link className="nav-link lead" style={{fontWeight:'bold', color:'grey'}}  to={'/products'}>Products</Link>
                <Link className="nav-link lead" style={{fontWeight:'bold', color:'grey'}}  to={'/orders'}>Orders</Link>
            </nav>
        </div>
    )
}

export default Header