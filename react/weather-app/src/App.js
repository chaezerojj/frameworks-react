import AddCar from '../../car/src/components/AddCar';
import './App.css';
import { useState, useEffect } from 'react';

// weather api 사용하여 위치에 따른 날씨 가져오기

// useEffect 훅 함수에서 fetch로 빈 배열을 두 번째 인수로 전달하여 수행
// - fetch는 첫 번째 렌더링 이후 한 번 호출됨




function App() {
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [isReady, setReady] = useState("");

  useEffect(() => {
    // 위치: 35.15 / 129.05
    // openweather api 2.5 버전
    // appid=본인api키
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.15&lon=129.05&units=metric&appid={}")
      .then(result => result.json())
      .then(jsonResult => {
        setTemp(jsonResult.main.temp)
        setDesc(jsonResult.weather[0].main)
        setIcon(jsonResult.weather[0].icon)
        setReady(true)
      })
      .catch(err => console.error(err))
  }, [])

  if (isReady) {
    return (
      <div className='App'>
        <div className='weather-wrapper'>
          <h1>Weather App</h1>
          <p>Temperature: {temp} &#8451; </p>
          <p>Description: {desc}</p>
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>
    // 서버에 문제가 생기거나 로딩이 안될 시 출력하는 문장
  }
}

export default App;
