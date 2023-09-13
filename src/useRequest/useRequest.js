"use client"

import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());
const url1 = "//one-api.ir/weather/?token=726804:650012cfe76e1&action=current&city=شیراز"

export const useGetData = () =>{
    
    const { data, error, isLoading } = useSWR(url1, fetcher)

    return{ data, error, isLoading}
}

const url2 = "//one-api.ir/weather/?token=726804:650012cfe76e1&action=daily&city=شیراز"

export const GetForecastSixteenDay = () =>{

    const {data, error, isLoading} = useSWR(url2, fetcher)

    return{data, error, isLoading}
}

