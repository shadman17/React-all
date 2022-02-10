import React from "react";

import "./product-page.styles.css";
import ProductDetailPage from "../productdetailpage/product-detail-page.component";

class ProductPage extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      buttonshow: false,
      singleProduct: null,
      products: [
        {
          id: 1,
          name: "Shirt",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam omnis nihil numquam quaerat quisquam error vitae in officiis iste eaque laborum praesentium veniam, magni quo quia asperiores, unde et?",
          price: "1000",
          category: "Shirt",
        },
        {
          id: 2,
          name: "Pant",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam omnis nihil numquam quaerat quisquam error vitae in officiis iste eaque laborum praesentium veniam, magni quo quia asperiores, unde et?",
          price: "1500",
          category: "Pant",
        },
        {
          id: 3,
          name: "T-shirt",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam omnis nihil numquam quaerat quisquam error vitae in officiis iste eaque laborum praesentium veniam, magni quo quia asperiores, unde et?",
          price: "300",
          category: "T-shirt",
        },
        {
          id: 4,
          name: "Hats",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam omnis nihil numquam quaerat quisquam error vitae in officiis iste eaque laborum praesentium veniam, magni quo quia asperiores, unde et?",
          price: "220",
          category: "Hats",
        },
        {
          id: 5,
          name: "Shoe",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam omnis nihil numquam quaerat quisquam error vitae in officiis iste eaque laborum praesentium veniam, magni quo quia asperiores, unde et?",
          price: "2000",
          category: "Shoe",
        },
      ],
    };
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

clicker = (product) => {
    this.setState({ buttonshow: !this.state.buttonshow })
    this.setState({ singleProduct: product })
    console.log(product)
}

render() {
    if (this.state.loading) {
        return null; //app is not ready (fake request is in process)
    }
    return (
        <div className="product-page">
            <ul>
                {this.state.products.map(product => (
                    <li key={product.id}>
                        <h2>Name: {product.name}, Price: {product.price}</h2>
                        <button onClick={() => this.clicker(product)}> Show Details

                        </button>
                        {this.state.buttonshow && product.id === this.state.singleProduct.id?
                            (<ProductDetailPage name={this.state.singleProduct.name} description={this.state.singleProduct.description} price={this.state.singleProduct.price} category={this.state.singleProduct.category} />

                            ) : null

                        }
                    </li>
                ))}
            </ul>

        </div>
    )

}


}

export default ProductPage;