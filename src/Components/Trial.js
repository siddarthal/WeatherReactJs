import { useEffect, useState } from "react"
import axios from "axios";

const Siddartha=()=>{
    const [data,setData]=useState(null);
    useEffect(()=>{
        const dataget=async()=>{
            try {
                const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1274d16dcc816a3ca4d4b8c7432ed9e5');
                console.log(response);
                setData(response.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        dataget();
    },[])
    return <div>hi</div>
}
export default Siddartha;