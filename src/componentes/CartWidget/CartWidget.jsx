import '../Navbar/Navbar.css';

const CartWidget = () => {
    const cartItemCount = 3; // Número hardcodeado (fijo)
    return (
        <div className="cart-widget">
            <ul>
                <li>
                    <a href="./pages/iniciar.html"><img src="./Images/aporte.png" alt="Login"/></a>
                </li>
            </ul>
            <ul>
                <li className="submenu">
                    <img src="./Images/car.svg" id="img-carrito" alt="carrito"/>
                    <span className="item-count">{cartItemCount}</span>
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
                        <a href="#" id="vaciar-carrito" className="btn-2">Vaciar carrito</a>
                    </div>
                </li>
            </ul>
        </div>

    );
};

export default CartWidget;
