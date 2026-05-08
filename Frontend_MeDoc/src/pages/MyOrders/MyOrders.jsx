import React, {useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'

const MyOrders = () => {

  const [orders, setOrders] = useState([]);
  const { med_list } = useContext(StoreContext);

  const fetchOrders = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(

        "http://localhost:5000/api/order/my-orders",

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      if (response.data.success) {

        setOrders(response.data.orders);

      }

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchOrders();

  }, []);

  return (

    <div className='my-orders'>

      <h2>My Orders</h2>

      {

        orders.length === 0 ? (

          <p className='no-orders'>

            No orders found

          </p>

        ) : (

          <div className='orders-container'>

            {

              orders.map((order) => (

                <div key={order._id} className='order-card'>

                  <div className='order-top'>

                    {/* <div>

                      <p className='order-id'>

                        Order ID: {order._id}

                      </p>

                    </div> */}

                    <span className={`order-status ${order.status}`}>

                      {order.status}

                    </span>

                  </div>

                  <div className='order-items'>

                    {

                     order.items.map((item, index) => {

  const medicineData = med_list.find(

    (med) => med._id === item.medicine

  );

  return (

    <div key={index} className='order-item'>

      <div className='item-left'>

        <img

          src={medicineData?.image}

          alt=""

          className='order-med-image'

        />

        <div>

          <span className='item-name'>

            {medicineData?.med_name}

          </span>

          <span className='item-qty'>

            Qty: {item.quantity}

          </span>

        </div>

      </div>

      <span className='item-price'>

        ₹ {item.price * item.quantity}

      </span>

    </div>

  );

})

                    }

                  </div>

                  <div className='order-footer'>

                    <span className='total-amount'>

                      Total: ₹ {order.totalAmount}

                    </span>

                    <span className='order-date'>

                      {

                        new Date(order.createdAt)

                        .toLocaleDateString()

                      }

                    </span>

                  </div>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  )

}

export default MyOrders