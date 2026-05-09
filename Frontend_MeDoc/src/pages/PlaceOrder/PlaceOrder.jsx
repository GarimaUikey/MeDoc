import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const {

    getTotalCartAmount,
    cartItems,
    med_list,
    setCartItems

  } = useContext(StoreContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: ""

  });
  const onChangeHandler = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => ({

      ...prev,
      [name]: value

    }));

  };
  const placeOrderHandler = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      // CREATE ORDER ITEMS ARRAY
      const orderItems = [];

      med_list.map((item) => {

        if (cartItems[item._id] > 0) {

          orderItems.push({

            medicineId: item._id,

            medicineName: item.med_name,

            quantity: cartItems[item._id],

            price: item.price

          })

        }

      });

      const orderData = {

        items: orderItems,

        totalAmount: getTotalCartAmount() + 10,

        deliveryAddress: {

          street: formData.street,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode

        }

      };

      const response = await axios.post(

        "http://localhost:5000/api/order/place",

        orderData,

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      if (response.data.success) {

        toast.success("Order placed successfully");

        // CLEAR CART
        setCartItems({});

        navigate("/order-success");

      }

    } catch (error) {

      console.log(error);

      toast.error("Order failed");

    }

  };
  return (
    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>
      <hr className=" h-1px bg-gray-200 border-none w-full" />
      <div className='mt-4'></div>

      <form className='place-order'>
        <div className='place-order-left'>
          <p className="title">Delivery Information</p>
          <div className='multi-fields'>
            <input

              type="text"
              placeholder='First Name'
              name='firstName'
              value={formData.firstName}
              onChange={onChangeHandler}

            />
            <input
              type="text"
              placeholder='Last Name'
              name='lastName'
              value={formData.lastName}
              onChange={onChangeHandler}
            />
          </div>
          <input

            type="email"
            placeholder='Email Address'
            name='email'
            value={formData.email}
            onChange={onChangeHandler}

          />
          <input

            type="text"
            placeholder='Street'
            name='street'
            value={formData.street}
            onChange={onChangeHandler}

          />
          <div className='multi-fields'>
            <input

              type="text"
              placeholder='City'
              name='city'
              value={formData.city}
              onChange={onChangeHandler}

            />
            <input

              type="text"
              placeholder='State'
              name='state'
              value={formData.state}
              onChange={onChangeHandler}

            />
          </div>
          <div className='multi-fields'>
            <input

              type="text"
              placeholder='PIN Code'
              name='pincode'
              value={formData.pincode}
              onChange={onChangeHandler}

            />
            <input

              type="text"
              placeholder='Country'
              name='country'
              value={formData.country}
              onChange={onChangeHandler}

            />
          </div>
          <input
            type="text"
            placeholder='Phone'
            name='phone'
            value={formData.phone}
            onChange={onChangeHandler}
          />

        </div>
        <div className='place-order-right'>
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹ {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹ {getTotalCartAmount() === 0 ? 0 : 10}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</b>
              </div>
            </div>
            <button onClick={placeOrderHandler}
            >

              PROCEED TO PAYMENT

            </button>
          </div>

        </div>

      </form>


    </div>
  )
}

export default PlaceOrder
