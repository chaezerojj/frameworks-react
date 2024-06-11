import React, { useState, useLayoutEffect } from 'react'

// 창의 크리 변화 시 엘리먼트 너비와 높이 얻으려면

export default function UseWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState();
  
  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize)
  })

  return (
    <>
      <h1>{width}, {height}</h1>
    </>
  )
}
