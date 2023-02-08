import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allDoctors = "http://10.0.2.2:5000/api/v1/doctors"

const getAllDoctors = async()=>{
    const res = await axios.get(allDoctors)
    console.log(res.data)
    return res.data;
}

export const UseGetAllDoctors =()=>{
    const {isLoading, data}=useQuery(['allDoctors'], getAllDoctors)
    console.log(data)
    return {data, isLoading};
}

