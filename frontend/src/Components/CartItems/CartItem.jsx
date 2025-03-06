import React, { useContext } from 'react'
import './CartItem.css'
import remove_icon from '../Assests/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItem,removeFromCart}= useContext(ShopContext);
  return (
    <div className='cartitems'> 
        <div className="cartItem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return <div>
                        <div className="cartItems-format">
                            <img src={e.image} alt="" className='cart-product'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price*cartItem[e.id]}</p>
                            <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitem-total-items">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-items">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-items">
                        <h3>Total </h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem