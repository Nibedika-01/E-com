import React, { useContext, useState } from 'react'
import './CartItems.css'
import { HomeContext } from '../../Context/HomeContext'
import { assets } from '../assets/assets'

const CartItems = () => {

    const [location, setLocation] = useState("");
    const [tempLocation, setTempLocation] = useState("");

    const { getTotalCartAmount, allData, cartItems, removeFromCart } = useContext(HomeContext);

    const shippingFee = location.trim().toLowerCase() === "hetauda" || location === "" ? 0 : 150;
    const totalAmount = getTotalCartAmount() + shippingFee;

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
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartItemsFormat cartItemsFormatMain">
                                <img className='cartIconProductIcon' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>Rs. {e.price}</p>
                                <button className='cartItemsQuantity'>{cartItems[e.id]}</button>
                                <p>Rs. {e.price * cartItems[e.id]}</p>
                                <img className='cartItemsRemoveIcon' src={assets.remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className='forLocation'>
                <h4>Your location:</h4>
                <input
                    type="text"
                    placeholder="your city name"
                    value={tempLocation}
                    onChange={(e) => setTempLocation(e.target.value)}
                />
                <button onClick={() => setLocation(tempLocation)}>Done</button>
            </div>
            <div className="cartItemsDown">
                <div className="cartItemsTotal">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItemsTotalItems">
                            <p>Subtotal</p>
                            <p>Rs. {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItemsTotalItems">
                            <p>Shipping Fee</p>
                            <p>{shippingFee === 0 ? "Rs. 0" : "Rs." + shippingFee}</p>
                        </div>
                        <hr />
                        <div className="cartItemsTotalItems">
                            <h3>Total</h3>
                            <h3>Rs. {totalAmount}</h3>
                        </div>
                    </div>
                    <button>CHECK OUT</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems