'use client'

import { useGetData, GetForecastSixteenDay } from "@/useRequest/useRequest";
import CityCard from "@/components/cityCard/cityCard";
import Image from "next/image"; 
import Loading from "../loading";

const Weather =()=>{
    const result = useGetData()
    // const Day = GetForecastSixteenDay()
  
    if(result.error) return( <h1> Somthing went wrong! </h1> )
    if(result.isLoading) return( <Loading/> )
  
    console.log(result.data)
    return(
        <div className="w-full bg-[#030303] text-white">
            weather
        </div>
    )
}

export default Weather;