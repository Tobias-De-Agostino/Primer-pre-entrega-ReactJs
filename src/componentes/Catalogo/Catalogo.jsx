import './Catalogo.css'

const Catalogo = () => {
    return (
        <main id="root">
            <h2>Destacado</h2>
            <div>
                <h2 className="Titulo">Indumentaria:</h2>
                <section id="Indumentaria"></section>
                <h2 className="Titulo">Calzado:</h2>
                <section id="Calzado"></section>
            </div>
        </main>
    )
}

export default Catalogo