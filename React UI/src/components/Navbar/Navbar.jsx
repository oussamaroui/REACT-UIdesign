import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='container'>
            <h4>Ouss<span style={{color:'steelblue'}}>React</span></h4>
            <ul>
                <li>Pages</li>
                <li>Account</li>
                <li>Selections</li>
                <li>Docs</li>
                <button>Buy Now</button>
            </ul>
        </nav>
    )
}

export default Navbar