import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allDoctors = "http://10.0.2.2:5000/api/v1/doctors"
const getDateAvailable = "http://10.0.2.2:5000/api/v1/disponibility"

const getAllDoctors = async()=>{
    const res = await axios.get(allDoctors)
    // console.log(res.data)
    return res.data;
}

const getDates = async()=>{
    const res= await axios.get(getDateAvailable)
    return res.data
}

export const UseGetAllDoctors =()=>{
    const {isLoading, data}=useQuery(['allDoctors'], getAllDoctors)
    // console.log(data)
    return {data, isLoading};
}

export const UseGetDates =()=>{
    const {isLoading, data}=useQuery(['allDates'], getDates)
    // console.log(data)
    return {data, isLoading};
}

