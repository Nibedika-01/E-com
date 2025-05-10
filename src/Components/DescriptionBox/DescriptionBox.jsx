import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description'>
      <div className="descriptionNavigator">
        <div className="descriptionNavBox">Description</div>
        <div className="descriptionNavBox fade">Reviews (122)</div>
      </div>
      <div className="descriptionOnly">
        <p>The Thrifter Closet is an online thrift store that allows users to buy and sell pre-loved fashion items through a secure and user-friendly platform. Customers can browse curated collections, sign up for an account, and upload or purchase second-hand clothing—making sustainable fashion accessible and affordable for everyone.</p>
        <p>A digital thrift store where style meets sustainability—buy, sell, and love pre-loved fashion.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
