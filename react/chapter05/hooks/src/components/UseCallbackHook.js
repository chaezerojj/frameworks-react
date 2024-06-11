import React, { useCallback, useEffect } from 'react'
import { UseAnyKeyToRender } from '../hooks/DeepEffects';

// ? useCallback
// - 함수를 메모화
// 

export default function UseCallbackHook() {
  UseAnyKeyToRender();
  
  // const fn = () => {
  //   console.log("hello");
  //   console.log("world");
  // }
  // useEffect(() => {
  //   console.log("fresh render");
  //   fn();
  // }, [fn])
  //* --> useEffect()의 의존 관계 포함됨.
  // 하지만 렌더링될 때마다 서로 다른 함수라고 가정함.
  // : 렌더링될 때마다 effect 실행함
  // > 키 누를때마다 "fresh render" 표시됨 (의도한 상황은 X)
  
  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, [])
  // -> useCallback은 fn함수 값을 메모화함
  // -> useMemo나 useEffect와 마찬가지로 useCallback도 두번째 인자로 의존관계 배열을 받음
  // 여기서 의존 관계 배열이 비어있기 때문에 메모화된 콜백을 딱 한번 만듦

  useEffect(() => {
    console.log("fresh render");
    fn();
  }, [fn])

  return (
    <h3>UseCallbackHook</h3>
  )
}
