import React, { useContext } from 'react'
import './CartItems.css'
import { HomeContext } from '../../Context/HomeContext'
import { assets } from '../assets/assets';

const CartItems = () => {
    const { allData, CartItems, removeFromCart } = useContext(HomeContext);

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
            {allData.map((e) => {
                // Check if CartItems and e.id are both defined before accessing
                if (CartItems && e && e.id !== undefined && CartItems[e.id] > 0) {
                    return(
                        <div key={e.id}>
                            <div className="cartItemsFormat">
                                <img className='cartIconProductIcon' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>Rs.{e.price}</p>
                                <button className='cartItemsQuantity'>{CartItems[e.id]}</button>
                                <p>Rs.{e.price*CartItems[e.id]}</p>
                                <img src={assets.remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null; // Make sure to return something from the map function
            })}
        </div>
    )
}

export default CartItems