import React from "react";
import { Button } from '@material-ui/core';
import './productdetail-page.css'


const ProductDetailPage = ({ selectedProduct, setProductDetail }) => {
  return (
    <div className="product-detail">
      <div className="container ">

        <div className="card border-dark mb-3">
          <div className="card-header bg-transparent border-success">Product Name: {selectedProduct.name}</div>
          <div className="card-body bg-dark text-white">
            <h5 className="card-title">Product Price Range: {selectedProduct.price}</h5>
            <p className="card-text">Product Description: {selectedProduct.description}</p>
          </div>
          <div className="card-footer bg-transparent border-success">Product Category: {selectedProduct.category}</div>

        </div>
        <Button style={{
          borderRadius: 35,
          backgroundColor: "#21b6ae",
          padding: "10px 10px",
          fontSize: "10 px"
      }} onClick={() => setProductDetail(null)}>  Back to List </Button>
      </div>
    </div>

  );
};

export default ProductDetailPage;
