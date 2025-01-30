import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart'; // Asegúrate de que la ruta sea correcta

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
      <button className="btn btn-secondary" onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductCard;