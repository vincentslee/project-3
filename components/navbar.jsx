import Link from 'next/link';

const Navbar = () => ( <
    nav className = "navbar navbar-expand-lg navbar-light bg-light" >
    <Link href = "/" >
    <a className = "navbar-brand" > To Your Health </a> 
    </Link> <button className = "navbar-toggler"
    type = "button"
    data - toggle = "collapse"
    data - target = "#navbarSupportedContent"
    aria - controls = "navbarSupportedContent"
    aria - expanded = "false"
    aria - label = "Toggle navigation">
    <span className = "navbar-toggler-icon"/>
    </button>

    <div className = "collapse navbar-collapse justify-content-end"
    id = "navbarSupportedContent">
    <ul className = "navbar-nav">
    <li className = "nav-item">
    <Link href = "/">
    <a className = "nav-link"> Home </a> </Link> </li> <li className = "nav-item">
    <Link href = "/about">
    <a className = "nav-link" > ABOUT </a> </Link> </li> <li className = "nav-item">
    <Link href = "/tools">
    <a className = "nav-link"> Tools </a> </Link> </li> </ul> </div> </nav>
);

export default Navbar;
