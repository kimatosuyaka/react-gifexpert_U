import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//import PropTypes from "prop-types";

const GifExpertApp = (props) => {
  //const categories = ["One Punch", "Samurai X", "Dragon Balll", "Superman"];

  const [categories, setCategories] = useState([]);

  // const handleAdd = () => {
  //   //setcategories((categories)=>["LuiSilva", ...categories]);
  //   setcategories(["LuiSilva", ...categories]);
  // };

  // const handleSub = () => {
  //   const subCategories = categories.slice(0, categories.length - 1);
  //   setcategories(subCategories);
  // };

  // const listCategories = categories.map((categoria, index) => (
  //   <li key={index}>{categoria}</li>
  // ));

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory setCategories={ setCategories } categories={ categories } />
     
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button>
      <button onClick={handleSub}>Quitar</button> */}
      
            

      <ol>
        
        
        {categories.map( categoria => <GifGrid key={categoria} category={categoria} /> )}

        
      </ol>

    </>
  );
};

//GifExpertApp.propTypes = {};



export default GifExpertApp;
