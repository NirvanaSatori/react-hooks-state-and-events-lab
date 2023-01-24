import React ,{ useState } from "react";

function Item({ name, category }) {

  const [addToCart,setAddToCart] = useState(false)

  const appClass = addToCart ? "in-cart" : ""
  const textField = addToCart ? "Add to Cart" : "Remove From Cart"

  function HandleCart (){
    setAddToCart((addToCart => !addToCart))

  }


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
    <button onClick = {HandleCart} className="add">{textField}</button>
    </li>
  );
}

export default Item;
