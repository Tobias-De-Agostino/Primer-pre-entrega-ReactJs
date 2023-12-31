import './Navbar.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const links = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Destacado",
        href: "/productos/Destacado",
    },
    {
        label: "Hombre",
        href: "/productos/Hombre",
    },
    {
        label: "Mujer",
        href: "/productos/Mujer",
    }
];

const Navbar = () => {
    console.log( window )
    return(
        <header className="header">
            <div className="menu container">
                <a href="#" className="logo">De todo <br /> un poco</a>
                <input type="checkbox" id="menu" />
                <label htmlFor="menu">
                    &#8801
                </label>
                <nav className="navbar">
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={({ isActive }) => (
                            `uppercase font-bold ${isActive ? "text-white" : "text-black"}`
                            )}
                        >
                            {link.label}
                        </NavLink>

                    ))}

                    <CartWidget/>
                </nav>
            </div>
        </header>
    );
};

export default Navbar