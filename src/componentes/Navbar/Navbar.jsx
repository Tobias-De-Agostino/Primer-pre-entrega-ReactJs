import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return(
        <header className="flex items-center min-h-[15vh] bg-green px-70 py-0">
            <div className="menu container">
                <a href="#" className="logo">De todo <br /> un poco</a>
                <input type="checkbox" id="menu" />
                <label htmlFor="menu">
                    &#8801
                </label>
                <nav className="navbar">
                        <Link to="/">Inicio</Link>
                        <Link to="/category/Destacado">Destacado</Link>
                        <Link to="/category/Hombre">Hombre</Link>
                        <Link to="/category/Mujer">Mujer</Link>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Navbar