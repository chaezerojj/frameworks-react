import React, { useLayoutEffect, useState } from 'react'

// 마우스 위치 추적하는 컴포넌트 만들기

export default function UseMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({x, y}) => {
    setX(x);
    setY(y);
  }

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition)
    return () => window.removeEventListener("mousemove", setPosition)
  })

  return (
    <>
      <h1>{x}, {y}</h1>
      <p style={{position: 'absolute'}}>🐤</p>
    </>
  )
}
