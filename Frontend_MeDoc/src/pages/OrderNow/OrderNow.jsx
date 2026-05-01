import React, { useContext, useState } from 'react'
import './OrderNow.css'
import { StoreContext } from '../../context/StoreContext'
import MedItem from '../../components/Med_item/MedItem'
import ExploreMedicines from '../../components/ExploreMedicines/ExploreMedicines'
import { category_list } from '../../assets/assets'

const OrderNow = () => {
  
  const { med_list} = useContext(StoreContext)
  const [category, setCategory] = useState("All");


  return (
    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>
      <hr className=" h-[1px] bg-gray-200 border-none w-full" />
      <div className='mt-4'>
        <div className="heading"> <h2>Top Medicines Near You</h2> </div>
        


        {/* The Medicine Category Section */}
        <div className='flex flex-col items-center gap-5 mt-2 w-full max-w-[1200px] mx-auto text-center' id='explore-medicine'>
                
                
                {/* <h1 className='text-[#262626] text-3xl font-medium'>Explore Medicines</h1>
                <p  className='text-[#808080] mx-auto max-w-[80%] text-base leading-relaxed'>Browse a wide range of trusted medicines and healthcare essentials designed to meet your everyday needs.</p>*/}
              
              
              <div className="flex justify-start md:justify-center items-center gap-[30px] text-center my-5 w-full overflow-x-scroll no-scrollbar">
                {category_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev==item.cat_name ?"All" :item.cat_name)} key={index} className="flex-shrink-0 cursor-pointer">
                            <img className={`w-[4vw] min-w-[60px] rounded-full transition-all duration-200 ${category === item.cat_name ? "border-2 border-[#011944] p-[2px]" : ""}`} src={item.cat_image} alt=""/>
                            <p className='mt-[5px] text-[#011944] text-[max(1vw,10px)]'>{item.cat_name}</p>
                        </div>
                        )
        })}
        </div>
        
      





      {/*The ECommerce Section*/}
        <div className='med-display' id='med-display'>
         
          <div className="med-display-list">
            {med_list.map((item,index)=>{
              if(category === "All" || category === item.category){
                return <MedItem key={index} id={item._id} med_name={item.med_name} description={item.description} price={item.price} image={item.image} />
                  }
              
            })}
          </div>

        </div>


      </div>
    </div>
    </div>
    
  )
}

export default OrderNow
