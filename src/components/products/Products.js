import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './products.css';
const Products = (req) => {
    const {name,img,price,seller,stock} = req.product;
    return (
        <div className="products-container">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only left {stock} products</small></p>
                <button onClick={()=>req.addproduct(req.product)}>
                <FontAwesomeIcon icon={faShoppingCart} />
                Add to cart</button>
            </div>
        </div>
    );
};

export default Products;