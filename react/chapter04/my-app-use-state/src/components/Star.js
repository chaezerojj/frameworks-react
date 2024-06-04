import React from 'react';
import { FaStar } from "react-icons/fa";

// 사용자가 아무 별이나 클릭할 수 있게 해야 함
// - onClick핸들러를 FaStar컴포넌트에 추가하여 별 클릭 가능하게 만들기
// - onClick핸들러 안 onSelect함수 추가

const Star = ({ selected = false, onSelect = f => f }) => {
  return (
    <FaStar
      color={selected ? "red" : "gray"} 
      size="3em"
      onClick={onSelect} // onClick핸들러 안 onSelect함수 추가
      //() => setSelectedStars(i)
      //() => setSelectedStars(0)
      //
    />
  )
}

export default Star;