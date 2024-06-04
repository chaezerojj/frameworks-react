// src/components/StarRating.js
import { useState } from "react";
import Star from './Star.js';
// 외부js파일 컴포넌트 import 시 {중괄호} 떼기

const createArray = length => [...Array(length)]

// useState훅이 반환하는 배열의 두번째 요소
// -> 상태값 변경 시 사용가능한 함수
// 훅이 걸린 컴포넌트를 렌더러와 연동시킴
// setSelectedStars함수를 사용해 selectedStars값 바꿀때마다
// StarRating함수 컴포넌트가 훅에 의해 다시 호출되면서 렌더링 이루어짐
// 훅 사용하는 이유
// >> 훅이 걸린 데이터가 변경되면 데이터에 대한 훅이 걸린 컴포넌트에 
//   새 값을 전달하면서 컴포넌트를 다시 렌더링해줌
export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);
  return <>
    {createArray(totalStars).map((n, i) =>
      <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i+1)}
      />
      )}
    <p>{selectedStars} of {totalStars} stars</p>
  </>
}