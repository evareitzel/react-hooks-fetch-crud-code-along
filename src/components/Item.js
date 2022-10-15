import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {

  function handleAddToCartClick(){
    // console.log("clicked item: ", item)
    // const updatedItem={
    //   name: name,
    //   category: category,
    //   isInCart: true // state?
    //   key: , 
    // }
    // PATCH
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
    .then(r => r.json())
    .then(updatedItem => onUpdateItem(updatedItem)) // console.log(updatedItem)
    //   () => {callback to update item in ShoppingList (isInCart)}
  }

  function handleDeleteClick(){
    // console.log(`${item.name} got deleted!`)
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => onDeleteItem(item))
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button onClick={handleAddToCartClick} className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
