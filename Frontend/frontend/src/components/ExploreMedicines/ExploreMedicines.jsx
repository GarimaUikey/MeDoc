import React from 'react'
import './ExploreMedicines.css'
import { menu_list } from '../../assets/assets'

const ExploreMedicines = ({category,setCategory}) => {

  return (
    <div className='flex flex-col items-center gap-5 mt-6 w-full max-w-[1200px] mx-auto text-center' id='explore-medicine'>
        <h1 className='text-[#262626] text-3xl font-medium'>Explore Medicines</h1>
        <p  className='text-[#808080] mx-auto max-w-[80%] text-base leading-relaxed'>Browse a wide range of trusted medicines and healthcare essentials designed to meet your everyday needs.</p>
      <div className="flex justify-start md:justify-center items-center gap-[30px] text-center my-5 overflow-x-scroll no-scrollbar ">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev==item.menu_name ?"All" :item.menu_name)} key={index} className="flex-shrink-0 cursor-pointer">
                    <img className={`w-[7.5vw] min-w-[80px] rounded-full transition-all duration-200 ${category === item.menu_name ? "border-4 border-[#011944] p-[2px]" : ""}`} src={item.menu_image} alt=""/>
                    <p className='mt-[10px] text-[#011944] text-[max(1.4vw,16px)]'>{item.menu_name}</p>

                </div>
            )
        })}
      </div>
       <hr className='my-1 h-[1px] bg-[#e2e2e2] border-none' />
       
    </div>
    
  )
}

export default ExploreMedicines
