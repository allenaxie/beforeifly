import { useState, useEffect, useRef} from "react";
import * as productsAPI from "../../utilities/products-api";
import { Layout } from "antd";
import 'antd/dist/antd.css';


export default function ProductsIndexPage() {
  
  const [productItems, setProductItems] = useState([]);
  const [activeCateg, setActiveCateg] = useState('');
  const categoriesRef = useRef([])
  const { Header, Sider, Content } = Layout;

  useEffect(function () {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = products.reduce((acc, product) => {
        const cat = product.category.name;
        return acc.includes(cat) ? acc : [...acc, cat]
      }, []);
      setProductItems(products)
      setActiveCateg(products[0].category.name);
    }
    getProducts();
  }, [])

  return (
    <Layout>
      <Content>
      <h1>ProductsIndexPage</h1>

      </Content>

    </Layout>
  )
}

