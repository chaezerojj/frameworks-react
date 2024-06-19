import React, { useEffect, useState } from 'react';

export default function CarList() {
  // REST API에서 가져온 자동차 정보를 담을 상태 객체 필요
  const [cars, setCars] = useState([]);
  // 비어있는 배열을 기본값으로 cars라는 상태를 선언

  useEffect(() => {
    fetch("http://localhost:8080/api/cars")
    // useEffect훅에서 fetch를 실행
  })
  // - fetch: web server에 요청을 보내는 함수 - AJAX
  // - 두 번째 인수로 비어있는 배열을 전달
  // -> fetch는 첫 번째 렌더링 후 한번만 실행됨
  // -> JSON 응답 데이터에 있는 자동차 데이터는 cars상태에 저장

  return (
    <div>CarList</div>
  )
}
