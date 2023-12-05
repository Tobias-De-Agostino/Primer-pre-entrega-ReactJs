import '../Navbar/Navbar.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='header-content container'>
            <div className='header-txt'>
                <p>{greeting}</p>
                <h1>de todo un poco</h1>
                <p>Indumentaria para todos</p>
            </div>
        </div>
    );
};
export default ItemListContainer;
