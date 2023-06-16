import { useEffect, useState } from "react"
import axios from "axios";
import "../App.css";
import { Grid } from '@mui/material';


const Siddartha = ({ setData, setForecast }) => {
  const [temp, setTemp] = useState("");
  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=17.9820644&lon=79.5970954&appid=1274d16dcc816a3ca4d4b8c7432ed9e5');
        const forecast = await axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=17.9820644&lon=79.5970954&appid=1274d16dcc816a3ca4d4b8c7432ed9e5');
        // console.log(response);
        setData(response);
        setForecast(forecast);
      }
      catch (err) {
        console.log(err);
      }
    }
    dataget();
  }, [])

  const handleChange = (e) => {
    setTemp(e.target.value)
  }

  const handleSubmit = (e) => {
    // alert('A name was submitted: ' + temp);
    e.preventDefault();

    datarget();
  }
  const datarget = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${temp}&limit=3&appid=1274d16dcc816a3ca4d4b8c7432ed9e5`);
      const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=1274d16dcc816a3ca4d4b8c7432ed9e5`);
      const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${response2.data.id}&appid=1274d16dcc816a3ca4d4b8c7432ed9e5`)
      console.log(response2);
      setForecast(forecast);
      setData(response2);
    }
    catch (err) {
      alert("Please type proper city name  or the specified city is not  found in this records")

      console.log(err);
    }
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };
  return (
    <>
      <Grid item xs={2.8}></Grid>
      <Grid item xs={6}>

        <form >
          <input type="text" className="Former" onKeyPress={handleKeyPress} onChange={handleChange} placeholder="Search City" />
        </form>

      </Grid>
      <Grid item xs={3}></Grid>

    </>


  )
}
export default Siddartha;