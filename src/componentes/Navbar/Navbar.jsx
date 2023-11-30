import './Navbar.css'


const Navbar = () => {
    return(
        <header className="flex items-center min-h-80vh bg-green px-70 py-0">
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
                <div className="navbar2">
                    <ul>
                        <li>
                            <a href="./pages/iniciar.html"><img src="./Images/aporte.png" alt="Login"/></a>
                        </li>
                    </ul>
                    <ul>
                        <li className="submenu">
                            <img src="./Images/car.svg" id="img-carrito" alt="carrito"/>
                            <div id="carrito">
                                <table id="lista-carrito">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <a href="#" id="vaciar-carrito" class="btn-2">Vaciar carrito</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-content container">
                <div className="header-txt">
                    <h1>de todo un poco</h1>
                    <p>Indumentaria para todos</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar