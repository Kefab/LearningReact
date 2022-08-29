import React, { useEffect, useState } from "react";

import categoryService from "../../services/category.service";
import productService from "../../services/product.service";
import SelectMenu from "./../../components/SelectMenu.js";
import Layout from "./../../components/Layoud";

import { ProductList } from "../../components/ProductList";
import './style.css'

export function HomePage() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);

  function customOnClick(name) {
    setCategory(name);
  }

  useEffect(() => {
    productService.getProducByCategory(category).then((result) => {
      setProducts(result);
    });
  }, [category]);

  useEffect(() => {
    categoryService.getAllCategories().then((reult) => {
      setCategories(reult);
    });
  }, []);

  if (categories != undefined) {
    return (
      <>
        <Layout />
        <div id='main-container'>
          {categories.map((category) => (
            <>
              
                <SelectMenu
                  name={category.NOMBRE_CATEGORIA}
                  onPress={() => customOnClick(category.COD_CATEGORIA)}
                />
              
            </>
          ))}
        </div>
        <ProductList products={products}></ProductList>
      </>
    );
  } else {
    return <>Cargando ...</>;
  }
}
