import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState("Welcome");
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const handleSumit = (e) => {
    e.preventDefault();
    //setCategories([...categories, inputValue]); funciona pasando las categorias
    if(inputValue.trim().length > 2){
      
      setCategories(cate => [ inputValue, ...cate ]);
      // setCategories(inputValue);
         setInputValue("");
      
    } 
   
  }

  return (
    
    <form onSubmit={handleSumit}>
      <input 
        type="text"
        placeholder="Escribe alguna palabra"
        value={inputValue} 
        onChange={handleInputChange} 
      />        
    </form>
          
  );
};

AddCategory.propTypes = {
 setCategories: PropTypes.func.isRequired 
};
