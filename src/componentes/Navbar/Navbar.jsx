import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';


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
                    <ul>
                        <li><a href="./index.html">Inicio</a></li>
                        <li><a href="./pages/destacado.html">Destacado</a></li>
                        <li><a href="./pages/hombre.html">Hombre</a></li>
                        <li><a href="./pages/Mujer.html">Mujer</a></li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Navbar