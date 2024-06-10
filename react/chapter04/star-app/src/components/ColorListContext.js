import React, { useContext } from 'react';
import { ColorContext } from '..';
import Color from './Color';

// useContext를 통해 색 가져오기
// hooks 추가하여 콘텍스트 편하게 다루기 가능
// - useContext 훅으로 콘텍스트에서 값 얻어옴

export default function ColorListContext() {
  const { colors } = useContext(ColorContext);
  // console.log(colors);
  const colorsArr = colors.colors;
  if (!colorsArr.length) return <div>No Colors Listed. (Add a Color)</div>
  return (
    <div className="color-list">
      {
        colorsArr.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  )
}
