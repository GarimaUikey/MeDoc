import { createContext, useEffect, useState } from "react";
import axios from "../utils/axios";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol ='₹'

    const [doctors, setDoctors] = useState([]);

    const getDoctorsData = async () => {

        try {

            const response = await axios.get("/doctor/all");

            setDoctors(response.data.doctors);

        } catch (error) {

            console.log(error);

        }

    }

    useEffect(() => {

        getDoctorsData();

    }, []);

    const value ={
        doctors,
        currencySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider