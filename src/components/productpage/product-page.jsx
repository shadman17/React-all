import "./product-page.css";

const ProductPage = ({ products, setProductDetail }) => {
  return (
    <div className="product-page">
      <ul>
      {
        products.map(product => (
            <li key={product.id}>
                <h2>Name: {product.name}, Price:{product.price}</h2>
                <button onClick={() => setProductDetail(product)}> Show Details</button>
            </li>
        ))
      }
      
      </ul>
    </div>
  );
};

export default ProductPage;
