import React, { useState, createContext, useContext } from 'react';
import colorData from './color-data.json';

// ! 상태가 있는 콘텍스트 프로바이더
// - 콘텍스트 프로바이더 자체로는 콘텍스트에 들어있는 값 변경 불가
// - 콘텍스트 프로바이더를 렌더링하는 상태가 들어있는 컴포넌트 생성 후,
//   상태가 변경되면 컴포넌트가 새로운 콘텍스트 데이터를 가져 콘텍스트 프로바이더 다시 렌더링
//   -> 콘텍스트 프로바이더의 자식도 새 데이터에 맞춰 다시 렌더링됨

// 콘텍스트에 setColors 추가하면 이후 해당 함수 사용 시 실수할 수 있음
// -> colors배열 값을 바꿀 수 있는 방법: 사용자가 색 추가 or 제거 or 색 평점 매기기
// --> 각각의 경우에 대한 함수를 콘텍스트에 추가하여 실수 방지할 수 있는 코드 작성

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData.colors);
  let colorsCount = colors.length;

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: colorsCount++,
        title,
        color,
        rating: 0,
      }
    ])
  }

  const rateColor = (id, rating) => {
    setColors(
      colors.map(color => (color.id === id ? { ...color, rating } : color))
    )
  }

  const removeColor = id => {
    setColors(colors.filter(color => color.id !== id))
  }

  return (
    <>
      <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
        {children}
      </ColorContext.Provider>
    </>
  )
}
