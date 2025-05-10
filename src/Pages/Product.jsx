import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import allData from '../Components/assets/allData'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {

  const {allData} = useContext(HomeContext)
  const {productId} = useParams();
  const product = allData.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct product={product}/>
    </div>
  )
}

export default Product
