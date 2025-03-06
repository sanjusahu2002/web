import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const  product = props.product;
    const {addToCart} = useContext(ShopContext);
    return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className='left-images'>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='right-image'>
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className='right-ratings'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <span>(122)</span>
            </div>
            <div className='right-price'>
                <span >${product.old_price}</span>
                <span>${product.new_price}</span>
            </div>
            <p className='right-content'>
                A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
            </p>
            <div className='right-sizes'>
                <h4>Select Size</h4>
                <div className='sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
                <div className='right-add-btn' >
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                </div>
                <div className='right-tags'>
                    <p><span>Category :</span> {product.category}</p>
                    <p><span>Tags :</span> Moders, Latest</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay