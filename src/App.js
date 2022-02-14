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
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat",
      price: "1000-2000",
      category: "Shirt",
    },
    {
      id: 2,
      name: "Pant",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat",
      price: "1500-3000",
      category: "Pant",
    },
    {
      id: 3,
      name: "Jackets",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat",
      price: "3000-5000",
      category: "T-shirt",
    },
    {
      id: 4,
      name: "Hats",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat",
      price: "300-1000",
      category: "Hats",
    },
    {
      id: 5,
      name: "Shoe",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam illo reprehenderit? Reiciendis aspernatur laboriosam voluptatem, itaque id incidunt suscipit. Assumenda reiciendis exercitationem neque quos repellendus error repudiandae illo, omnis magnam officia vel non, incidunt consequatur autem. Similique, qui dolores quis blanditiis, impedit at nisi sapiente eum repellendus magnam quaerat",
      price: "1000-2000",
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
    }, 500);

  };

  const loaderChange = (show) => {
    setLoader(show);
  };

  useEffect(()=>{
    loaderChange(false)
  }, [])


  return (
    <div className="homepage">

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
      
    </div>
  );
}

export default App;
