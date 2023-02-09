import { useEffect, useState } from "react"
import axios from 'axios';

const useFetch = (url) =>{
    const [data,setData] = useState({})
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)


    useEffect(() => {
        fetch(url)
           .then((response) => response.json())
           .then((data) => {
              setData(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    const reFetch = async ()=>{
        setLoading(true)
        try{
            const res = await axios.get(url);
            setData(res.data);
        }catch(err){
            setError(err);
        }
        setLoading(false);
    };
    return{data,loading,error,setData,reFetch};
};

export default useFetch ;