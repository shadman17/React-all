import React from "react";

import './productpage.styles.css';
import ProductDetailPage from './product-detail-page.component';

class ProductPage extends React.Component {
    constructor() {
        super();

        this.state = {
            loading:true,
            buttonshow: false,
            products: [
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
            ]
        }
    }

    componentDidMount() {
        this.fakeRequest().then(() => {
          const el = document.querySelector(".loader-container");
          if (el) {
            el.remove();  // removing the spinner element
            this.setState({ loading: false }); // showing the app
          }
        });
      }
    
      fakeRequest = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 2000));
      };

    render(){
        if (this.state.loading) {
            return null; //app is not ready (fake request is in process)
        }
        return (
            <div className="product-page">
                <ul>
                    {this.state.products.map(product => (
                        <li key={product.id}>
                            <h2>Name: {product.name}, Price: {product.price}</h2>
                            <button onClick={() => this.setState({buttonshow: !this.state.buttonshow })}> Show Details

                            </button>
                            {this.state.buttonshow && (<ProductDetailPage name={product.name} description={product.description} price={product.price} category={product.category} />
                            
)}    
                        </li>
                    ))}
                </ul>
                
            </div>
        )

    }


}

export default ProductPage;