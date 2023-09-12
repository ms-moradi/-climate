"use client"

import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());
const url = "//one-api.ir/weather/?token=726804:650012cfe76e1&action=current&city=شیراز"

export const useGetData = () =>{
    
    const { data, error, isLoading } = useSWR(url, fetcher)

    return{ data, error, isLoading}
}

