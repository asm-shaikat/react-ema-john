import React, { useState } from 'react';
import './shop.css';
import fakeData from '../../fakeData';
import Products from '../products/Products';
import Cart from '../cart/Cart';
const Shop = () => {
    const data = fakeData.slice(0,10);
    const [product,setproduct] = useState(data);
    const [cart,setcart] = useState([]);
    const addproduct=(product)=>{
        console.log("product added to store",product);
        const newCart = [...cart,product];
        setcart(newCart);
    }
    return (
        <div className="shop">
            <div className="product">
                    {
                        product.map(req =><Products product={req} addproduct={addproduct} ></Products>)
                    }
            </div>
            <div className="cart">
               <Cart  cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;