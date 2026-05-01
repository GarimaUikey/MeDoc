import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>
      <hr className=" h-[1px] bg-gray-200 border-none w-full" />
      <div className='mt-4'></div>

      <form className='place-order'>
        <div className='place-order-left'>
          <p className="title">Delivery Information</p>
          <div className='multi-fields'>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name'  />
          </div>
          <input type="email" placeholder='Email Address'/>
          <input type="text" placeholder='Street' />
          <div className='multi-fields'>
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State'  />
          </div>
          <div className='multi-fields'>
            <input type="text" placeholder='PIN Code' />
            <input type="text" placeholder='Country'  />
          </div>
          <input type="text" placeholder='Phone'/>

        </div>
        <div className='place-order-right'>
          <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount()===0 ?0 :10}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()===0 ?0 :getTotalCartAmount()+10}</b>
            </div>            
          </div>            
                    <button >PROCEED TO PAYMENT</button>
        </div>

        </div>

      </form>


      </div>
  )
}

export default PlaceOrder
