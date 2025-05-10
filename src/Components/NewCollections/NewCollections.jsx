import React from 'react'
import './NewCollections.css'
import newCollections from '../assets/new'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='newCollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {newCollections.map((item, i)=>{
            return(<Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>) 
        })}
      </div>
    </div>
  )
}

export default NewCollections
