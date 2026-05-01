import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMedicines from '../../components/ExploreMedicines/ExploreMedicines'
import SpecialityMenu from '../../components/SpecialityMenu'
import TopDoctors from '../../components/TopDoctors/TopDoctors'
import MedDisplay from '../../components/MedDisplay/MedDisplay'
import OrderHome from '../../components/OrderHome/OrderHome'


const Home = () => {

    const [category,setCategory] = useState("All");
  return (
    <div>
        <Header/>
        {/*<ExploreMedicines category={category} setCategory={setCategory}/> 
        <MedDisplay category={category} />*/}
              
             <SpecialityMenu/>
             <hr className="h-[1px] bg-gray-200 border-none w-full" />
             <OrderHome/>
        
        <TopDoctors/>
       

        
      
    </div>
  )
}

export default Home
