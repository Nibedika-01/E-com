import React from 'react'
import './Breadcrum.css'
import { assets } from '../assets/assets';

const Breadcrum = (props) => {

    const {product} = props;

  return (
    <div className='breadcrum'>
      HOME <img src={assets.right_icon} alt="" /> {product.category} <img src={assets.right_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
