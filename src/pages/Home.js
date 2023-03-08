import React, { useEffect } from 'react'
import axios from "axios"
const Home = () => {
    useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8d91c5e13be19f51ddc9531ef003a138')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        
        Home

    </div>
  )
}

export default Home