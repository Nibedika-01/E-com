import React, { useContext } from 'react'
import './CSS/Category.css'
import { HomeContext } from '../Context/HomeContext'
import { assets } from '../Components/assets/assets'
import Item from '../Components/Item/Item'

const Category = (props) => {

  const {allData} = useContext(HomeContext)

  return (
    <div className='category'>
      <h1>{props.category}</h1>
      <div className="categoryIndexSort">
        <p>
          Showing Products
        </p>
        <div className="categorySort">
        Sort by <img src={assets.arrow_icon} alt="" />
      </div>
      </div>
      
      <div className="categoryProducts">
        {allData.map((item, i)=>{
          if(props.category === item.category){
            return<Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
          }
          else{
            return(null)
          }
        })}
      </div>
    </div>
  )
}

export default Category
