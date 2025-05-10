import React from 'react'
import './RelatedProduct.css'
import allData from '../assets/allData'
import Item from '../Item/Item'

const RelatedProduct = (props) => {


    const {product} = props;

  return (
    <div className='relatedProduct'>
      <h1>Related Product</h1>
      <h1/>
      <div className="relatedItems">
        {allData.map((item, i)=>{
            if(item.category === product.category){
                return <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price}/>
            }
            else{
                return null;
            }
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
