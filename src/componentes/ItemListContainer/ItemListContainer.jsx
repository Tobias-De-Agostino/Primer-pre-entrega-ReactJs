// import '../Navbar/Navbar.css';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../ProductCard/ProductCard';

// const ItemListContainer = () => {
// const [products, setProducts] = useState([]);
// const { id } = useParams();

// useEffect(() => {
//     const fetchData = async () => {
//     const mockProducts = [
//         { id: 1, name: 'Camiseta', category: 'Clothing', price: 13.500, imageUrl: 'url_camiseta' },
//         { id: 2, name: 'Pantalón', category: 'Clothing', price: 17.750, imageUrl: 'url_pantalon' },
        
//     ];

//     if (id) {
//         const filteredProducts = mockProducts.filter(product => product.category.toLowerCase() === id.toLowerCase());
//         setProducts(filteredProducts);
//     } else {
//         setProducts(mockProducts);
//     }
//     };
//     fetchData();
// }, [id]);

// return (
//     <div>
//         <h2>Catálogo de Productos</h2>
//         <div className="product-list">
//             {products.map(product => (
//             <ProductCard key={product.id} {...product} />
//             ))}
//         </div>
//     </div>
// );
// };

// export default ItemListContainer;

import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import { pedirDatos } from "../utils/utils";
import { useParams } from "react-router-dom";
import Spinner from "../Loader/Spinner";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

const { categoryId } = useParams()

useEffect(() => {
    setLoading(true)

      pedirDatos() // <= Promise
        .then((data) => {
            const items = categoryId 
                            ? data.filter(prod => prod.category === categoryId)
                            : data

            setProductos(items)
        })
        .finally(() => setLoading( false ))
}, [categoryId])

return (
    <>
    {
        loading
        ? <Loader/>
        : <ItemList productos={productos}/>
    }
    </>
)
};

export default ItemListContainer;

