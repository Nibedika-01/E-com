import React, { useContext } from 'react'
import './ProductDisplay.css'
import { HomeContext } from '../../Context/HomeContext';

const ProductDisplay = (props) => {

    const { product } = props;
    const {addToCart} = useContext(HomeContext);
    return (
        <div className='productDisplay'>
            <div className="displayLeft">
                <div className="displayImgList">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="displayImg">
                    <img className='displayMainImg' src={product.image} alt="" />
                </div>
            </div>
            <div className="displayRight">
                <h1>{product.name}</h1>
                <p>Rs. {product.price}, <span>'{product.size}'</span></p>
                <button onClick={()=>{
                    addToCart(product.id)
                }}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay
