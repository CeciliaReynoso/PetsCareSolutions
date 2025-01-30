import React from 'react';
import ProductCard from './ProductCard'; // Asegúrate de que la ruta sea correcta

const ProductGallery = () => {
  // Aquí puedes agregar la lógica para obtener los productos
  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2' },
    // Agrega más productos según sea necesario
  ];

  return (
    <section className="product-gallery">
      <h2>Galería de Productos</h2>
      <div className="product-cards">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;