import './Header.css'

const Header= ()=>{
    return(
        <div className="header">
            <h2>WELCOME TO MY DASHBOARD</h2>
            <nav className="navbar">
                <a href="#Home">Home</a>
                <a href="#About Us">About Us</a>
                <a href="#Blogs">Blogs</a>
                <a href="#Contact">Contact</a>
            </nav>
        </div>
    )
}

export default Header;