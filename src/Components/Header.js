import { Link } from "react-router-dom"

function Header() {

    return (
        <div>
            <nav className="nav flex-column">
                <Link className="nav-link" to={'/'}>
                    <img src="/Images/cat_logo3_1.png" className="img-fluid" style={{ height: '8rem' }} alt="cat_logo" />
                </Link>
                <Link className="nav-link lead" style={{fontWeight:'bold', color:' rgb(50, 105, 84)'}} to={'/categories'}>Categories</Link>
                <Link className="nav-link lead" style={{fontWeight:'bold', color:' rgb(50, 105, 84)'}}  to={'/products'}>Products</Link>
                <Link className="nav-link lead" style={{fontWeight:'bold', color:' rgb(50, 105, 84)'}}  to={'/orders'}>Orders</Link>
            </nav>
           
        </div>
    )
}

export default Header