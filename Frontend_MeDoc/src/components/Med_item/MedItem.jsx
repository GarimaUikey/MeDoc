import React, { useContext, useState } from 'react'
import './MedItem.css'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const MedItem = ({id,med_name,price,description,image}) => {

    const {currencySymbol} = useContext(AppContext)
  
    const {cartItems,addToCart,removeFromCart}= useContext(StoreContext);



  return (
    <div className='med-item'>
        <div className="med-item-img-container">
            <img className='med-item-image' src={image} alt="" />
            {!cartItems[id]
                ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}  alt=""/>
                : <div className="med-item-counter">
                    <img onClick={()=>removeFromCart(id)}  src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>


            }
        </div>
        <div className='med-item-info'>
            <div className='med-item-name-rating'>
                <p>{med_name}</p>
                <img src={assets.rating_stars} alt="" />
            </div>
            <p className="med-item-description">{description} </p>
            <p className="med-item-price">{currencySymbol} {price} </p>

        </div>
      
    </div>
  )
}

export default MedItem
