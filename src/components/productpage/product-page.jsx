import "./product-page.css";
import { Button } from '@material-ui/core';



const ProductPage = ({ products, setProductDetail }) => {
  return (<>
  <div className="container product-page">
  <div className="card-deck">
      {
        products.map(product => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price Range: <br /> {product.price}</p>
            </div>
            <div className="card-footer">
              <Button style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                padding: "10px 10px",
                fontSize: "10 px"
            }}  onClick={() => setProductDetail(product)}> Show Details</Button>

            </div>
          </div>

        ))
      }

    </div>
  </div>
    
  </>


  );
};


export default ProductPage;

