import "./App.css";
import { useState, useEffect } from "react";
import ProductPage from "./components/productpage/product-page";
import ProductDetailPage from "./components/productdetail/productdetail-page";
import { Oval } from  'react-loader-spinner';

function App() {
  const [products, setProducts] = useState([
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
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [loader, setLoader] = useState(true);

  const setProductDetail = (product) => {
    loaderChange(true)
    setTimeout(() => {
      setSelectedProduct(product);
      loaderChange(false)
    }, 1000);

  };

  const loaderChange = (show) => {
    setLoader(show);
  };

  useEffect(()=>{
    loaderChange(false)
  }, [])


  return (
    <>
    {
      loader ? <Oval color="#00BFFF" height={80} width={80} /> : (<> {selectedProduct === null ? (
        <ProductPage products={products} setProductDetail={setProductDetail} />
      ) : (
        <ProductDetailPage
          selectedProduct={selectedProduct}
          setProductDetail={setProductDetail}
        />
      )} </>)
    }
      
    </>
  );
}

export default App;
