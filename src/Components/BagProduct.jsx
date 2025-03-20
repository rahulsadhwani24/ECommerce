import React, { useEffect, useState } from 'react'
import { AddToBagCustomUseState } from '../hooks/AddToBagCustomUseState';

function BagProduct({image, brand, title, stock, price, discountPercentage, returnPolicy}) {
    
    let actualPricee = price + (price * discountPercentage/100);
    let [quantity, setQuantity] = useState(1);
    let [pricee, setPrice] = useState(price * quantity);
    let [actualPrice, setActualPrice] = useState(actualPricee);

    function decreaseQty(){ 
        if(quantity > 1){ 
            setQuantity(quantity-1); 
            setPrice(pricee - price);
            setActualPrice(actualPrice - actualPricee);
        }
    }
    
    function increaseQty(stockk){ 
        if(quantity < stockk){ 
            setQuantity(quantity+1);  
            setPrice(pricee + price);
            setActualPrice(actualPrice + actualPricee);  
        }
    }

  return (
    <div className="productOnBag">
          <div className="productImage"><img src={image} alt="" /></div>
          <div className="productDetails">
            <h3 className="brandName">{brand}</h3>
            <h3 className="title">{title}</h3>
            <div className="quantity">Qty: <span className='qtyWrapper'><button className='decreaseQty qty' onClick={() => { decreaseQty() }}>-</button> {quantity} <button className='increaseQty qty' onClick={() => { increaseQty(stock) }}>+</button></span></div>
            <h3 className="price">${pricee.toString().substring(6, -1)} <span className='actualPrice'>${actualPrice.toString().substring(6, -1)}</span> <span className="discount">({discountPercentage}%)</span></h3>
            <h3 className='returnPolicy'>{returnPolicy}</h3>
          </div>
        </div>
  )
}

export default BagProduct