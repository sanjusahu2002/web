import React from 'react'
import "./Breadcrums.css"
import arrow_icon from '../Assests/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const product = props;
    console.log(product.product)
  return (
    <div className='breadcrums'>
        Home <img src={arrow_icon} alt="" />
        Shop <img src={arrow_icon} alt="" />
        {product.product.category} <img src={arrow_icon} alt="" />
        {product.product.name}
        
    </div>
  )
}

export default Breadcrums