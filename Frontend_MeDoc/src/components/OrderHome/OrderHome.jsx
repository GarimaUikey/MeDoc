import React, { useContext, useState } from 'react'
import './OrderHome.css'
import { assets, med_list } from '../../assets/assets'
import MedItem from '../Med_item/MedItem'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const OrderHome = () => {
    const { med_list } = useContext(StoreContext)
    const [category, setCategory] = useState("All");
    const navigate = useNavigate();


    return (
        <div>
            <div className='my-6 text-center'>
                <h1 className='text-[#262626] text-3xl font-medium '>Explore Medicines</h1>
                <div className='flex items-center justify-center gap-0 mt-3'>
                    <p className='hidden lg:block text-[#808080] mx-auto max-w-[80%] text-base leading-relaxed mt-3'>Browse a wide range of trusted medicines and healthcare essentials designed to meet your everyday needs.</p>
                    <img className='cursor-pointer w-10 h-10' onClick={() => {
                        navigate('/ordernow');
                        window.scrollTo(0, 0);
                    }} src={assets.arrow_right} alt="" />
                </div>

            </div>
            <div className='med-display' id='med-display'>

                <div className="med-display-list w-full flex items-center gap-4 justify-center">
                    {
                        med_list.slice(0, 4).map((item, index) => {

                            return (<MedItem key={index} id={item._id} med_name={item.med_name} description={item.description} price={item.price} image={item.image} />
                            )

                        })}




                </div>

            </div>

        </div>
    )
}

export default OrderHome
