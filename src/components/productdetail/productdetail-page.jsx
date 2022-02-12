import React from "react";

const ProductDetailPage = ({ selectedProduct, setProductDetail }) => {
  return (
    <div className="product-detail">
      <ul>
        <li><h2>Product Name: {selectedProduct.name}</h2></li>
        <li><h2>Product Description: {selectedProduct.description}</h2></li>
        <li><h2>Product Price: {selectedProduct.price}</h2></li>
        <li><h2>Product Category: {selectedProduct.category}</h2></li>
        <button onClick={() => setProductDetail(null)}> Back to List </button>
      </ul>
    </div>
  );
};

export default ProductDetailPage;
