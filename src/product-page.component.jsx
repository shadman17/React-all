import React, { useState, useEffect } from 'react';

import './product-page.styles.css';

import ProductDetailPage from './product-detail-page.component';
 

const ProductPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Shirt",
            description: "Black Shirt",
            price: "1000",
            category: "Shirt",
        },
        {
            id: 2,
            name: "Pant",
            description: "Jeans",
            price: "1500",
            category: "Pant",
        },
        {
            id: 3,
            name: "T-shirt",
            description: "Green T-shirt",
            price: "300",
            category: "T-shirt",
        },
        {
            id: 4,
            name: "Hats",
            description: "Red Hats",
            price: "220",
            category: "Hats",
        },
        {
            id: 5,
            name: "Shoe",
            description: "White Keds",
            price: "2000",
            category: "Shoe",
        }
    ])

    const [buttonShow, setButtonShow] = useState(false)
    
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fakeRequest().then(() => {
            const el = document.querySelector(".loader-container");
            if (el) {
              el.remove();  // removing the spinner element
              setLoading(false); // showing the app
            }                
          });
    }, [loading])

    const fakeRequest = () => {  
        return new Promise(resolve => setTimeout(() => resolve(), 2000));
      };

    if (loading) {
  
        return null; //app is not ready (fake request is in process)
    }




    return (
        <div className="product-page">
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <h2>Name: {product.name}, Price: {product.price}</h2>
                    <button onClick={() => setButtonShow(!buttonShow)}> Show Details

                    </button>
                    {buttonShow && (<ProductDetailPage name={product.name} description={product.description} price={product.price} category={product.category} />
                    
)}    
                </li>
            ))}
        </ul>
        
    </div>
    )


}

export default ProductPage;