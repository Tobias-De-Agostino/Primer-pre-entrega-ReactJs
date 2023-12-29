import { useEffect } from "react";
import { useState } from "react";
import Boton from "./Boton";
import useFetch from "../../hooks/useFetch";

const Prendas = () => {
const [id, setId] = useState(1)
const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])

const handleAnterior = () => {
    id > 1 && setId(id - 1)
}

const handleSiguiente = () => {
    setId(id + 1)
}

return (
    <div className="container m-auto mt-8">
    <h2 className="text-4xl font-semibold">Prendas</h2>
    <hr />

        {
            prenda &&
            <>
                <h2 className="text-2xl font-semibold">{prenda.name}</h2>
                <img src={prenda.sprites.front_default} alt={prenda.name}/>
            </>
        }

        <div className="flex gap-5">
            <Boton onClick={handleAnterior}>Anterior</Boton>
            <Boton onClick={handleSiguiente}>Siguiente</Boton>
        </div>
    </div>
);
};

export default Prendas;
