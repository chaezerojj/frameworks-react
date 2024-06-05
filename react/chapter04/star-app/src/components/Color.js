// src/components/Color.js
import React from 'react';
import StarRating from './StarRating';
import { FaTrash } from 'react-icons/fa';

// 상호작용을 컴포넌트 트리 위쪽으로 전달하기
// - 리스트에서 색을 제거하는 상호작용
// - 리스트에 들어있는 색의 평점을 변경하는 상호작용
// - 자식 컴포넌트에 대해 벌어진 상호작용을 수집하여 
//   트리의 위로 올려보내 상태가 저장된 루트컴포넌트에 도착

// 색의 이름 옆 각각 해당 색을 제거하는 버튼 생성

export default function Color(
  { id, title, color, rating, onRemove, onRate = f => f }) {
  return (
    <>
      <section>
        <h1>{title}</h1>
        <button onClick={() => { onRemove(id) }}>
          <FaTrash />
        </button>
        <div style={{ height: 50, backgroundColor: color }}></div>
        <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)} />
      </section>
    </>
  )
}
