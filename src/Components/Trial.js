import { useEffect, useState } from "react"
import axios from "axios";
const Siddartha = ({ data, setData, forecast, setForecast }) => {
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
    alert('A name was submitted: ' + temp);
    e.preventDefault();

    datarget();
  }
  const datarget = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${temp}&limit=3&appid=1274d16dcc816a3ca4d4b8c7432ed9e5`);
      const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=1274d16dcc816a3ca4d4b8c7432ed9e5`);
      const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${response2.data.id}&appid=1274d16dcc816a3ca4d4b8c7432ed9e5`)
      console.log(forecast);
      setForecast(forecast);
      setData(response2);
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
export default Siddartha;