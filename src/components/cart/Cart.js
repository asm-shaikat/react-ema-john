import React from 'react';
import './cart.css';
const Cart = (props) => {
    const cart = props.cart;  
    // const totalPrice = cart.reduce((total,product)=>total+product.price,0) 
    var totalPrice=0;
    var shippingCost=0;
    for(let i=0; i<cart.length; i++){
        totalPrice = totalPrice + cart[i].price;
    }
    if(totalPrice>=100){
        shippingCost = 80; 
    }
    else{
        shippingCost = 0; 
    }
    return (
        <div className="cart-container">
            <h3>Cart</h3>
            <h4>Item added:{props.cart.length}</h4>
            <p>Shipping cost: ${shippingCost}</p>
            <p>Total price $ {totalPrice+shippingCost}</p>
        </div>
    );
};

export default Cart;