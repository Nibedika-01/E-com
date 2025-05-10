import React, { useContext } from 'react'
import './CartItems.css'
import { HomeContext } from '../../Context/HomeContext'
import allData from '../assets/allData.js'
import { assets } from '../assets/assets'

const CartItems = () => {
    const { allData, cartItems, removeFromCart } = useContext(HomeContext);

    return (
        <div className='cartitems'>
            <div className="cartItemsFormatMain">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allData.map((e)=>{
                if(cartItems[e.id]>0){
                    return(
                        <div>
                <div className="cartItemsFormat">
                    <img className ='cartIconProductIcon' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>Rs{e.price}</p>
                    <button className='cartItemsQuantity'>{cartItems[e.id]}</button>
                    <p>{e.price*cartItems[e.id]}</p>
                    <img src={assets.remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr/>
            </div>
                    )
                }
            })}
        </div>
    )
}

export default CartItems