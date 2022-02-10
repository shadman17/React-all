import React from "react";

const ProductDetailPage = ({name, description, price, category}) => (
    <div className="productdetailpage">
        <ul>
            <li>
                {name} 
            </li>
            <li>
                {description} 
            </li>
            <li>
                {price} 
            </li>          
            <li>
                {category} 
            </li>
        </ul>
    </div>
)

export default ProductDetailPage;