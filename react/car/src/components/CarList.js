import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { SERVER_URL } from './constants';
import { DataGrid } from '@mui/x-data-grid';

// ag-grid 컴포넌트 : 데이터 표의 열도 정의
// - field는 자동차 객체의 속성
// - 열의 제목은 headerName 속성으로 설정
// - 열의 너비도 여기서 설정 가능

const columns = [
  { field: "brand", headerName: "Brand", width: 200 },
  { field: "model", headerName: "Model", width: 200 },
  { field: "color", headerName: "Color", width: 200 },
  { field: "year", headerName: "Year", width: 150 },
  { field: "price", headerName: "Price", width: 150 },
]


export default function CarList() {
  // REST API에서 가져온 자동차 정보를 담을 상태 객체 필요
  const [cars, setCars] = useState([]);
  // 비어있는 배열을 기본값으로 cars라는 상태를 선언

  const onDelClick = (url) => {
    // console.log(url);
    fetch(url, { method: "delete" })
      // 삭제 후에 새로운 목록으로 렌더링
      .then(() => fetchCars())
      .catch(err => console.error(err))
  }

  // 서버 주소 상수에서 목록을 가져오는 함수
  const fetchCars = () => {
    fetch(SERVER_URL + "/api/cars")
      .then(res => res.json())
      .then(data =>
        // console.log(data._embedded.cars)
        setCars(data._embedded.cars))
      .catch(err => console.log(err))
  }
  // - fetch: web server에 요청을 보내는 함수 - AJAX
  // - 두 번째 인수로 비어있는 배열을 전달
  // -> fetch는 첫 번째 렌더링 후 한번만 실행됨
  // -> JSON 응답 데이터에 있는 자동차 데이터는 cars상태에 저장

  useEffect(() => {
    fetchCars()
    // useEffect훅에서 fetchCars()를 실행
  }, [])

  return (
    <div>
      <Typography variant='h4' style={{padding: "20px"}}>Car List</Typography>
      {/* ? DataGrid
         -> 데이터 표의 데이터 원본은 fetch()로 읽어온 cars 상태
         -> rows 프롭으로 정의됨
         -> 데이터 표 컴포넌트 이용하기 위해 
            모든 행의 getRowId프롭으로 고유한 ID속성 정의해야 함 */}
      <div>
        <DataGrid
          columns={columns}
          rows={cars}
          getRowId={row => row._links.self.href}
        />
      </div>
      {/* <table>
        <tbody>
          {cars.map((car, index) =>
            <tr key={index}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
              <td>
                <button onClick={() =>
                  onDelClick(car._links.self.href)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table> */}
    </div>
  )
}
