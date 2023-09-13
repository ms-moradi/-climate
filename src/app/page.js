'use client'

import { useGetData } from "@/useRequest/useRequest";
import CityCard from "@/components/cityCard/cityCard";

export default function Home() {
  const result = useGetData()

  if(result.error) return( <h1> Somthing went wrong! </h1> )
  if(result.isLoading) return( <h1> Loading... </h1> )

  
  return (
   <>
    <CityCard result={result}/>
   </>
  )
}