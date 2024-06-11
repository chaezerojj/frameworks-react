import React, { useEffect, useMemo } from 'react'
import { UseAnyKeyToRender } from '../hooks/DeepEffects'

export default function WordCount({ children = "" }) {
  UseAnyKeyToRender();

  // words가 변경될 때만 컴포넌트를 다시 렌더링
  // const words = children.split(" ");
  // useEffect(() => {
  //   console.log("fresh render"); 
  // }, [words])
  // -> 키를 누를때마다 렌더링이 되고 있어 계속 콘솔에 찍힘
  // ==> 리액트에서 기본적으로 제공하는 useMemo 훅 사용하여 문제 해결

  // ? useMemo
  // - 메모화된 memorized값을 계산하는 함수 호출
  // - 컴퓨터과학에서 일반적으로 메모화는 성능을 향상시키키 위한 기법
  // - 메모리화된 함수는 함수 호출 결과를 저장하고 캐시함
  // - 이후 함수에 같은 입력 들어오면 캐시된 값 반환함
  // - --> 캐시된 값과 계산한 값을 비교하여 실제 값이 변경되었는지 검사해줌

  // useMemo에 전달된 함수를 사용하여 메모화할 값을 계산하므로써 작동됨
  // 의존관계가 바뀐 경우에만 이 값 재계산함
  // 자신에게 전달된 함수를 호출하여 받은 반환값으로 words 설정
  // - useMemo도 의존관계 배열에 의존함
  // - 의존관계 배열 전달 안하면 렌더링 일어날때마다 값을 재렌더링
  // - 의존관계 배열 => 콜백함수가 호출되어야 하는 때를 결정

  const words = useMemo(() =>
    children.split(" "), [children])
  useEffect(() => {
    console.log("fresh render");
  }, [words])

  // words 배열 => children 속성에 의존
  // children이 바뀌면 그에 맞춰 words값도 재계산해야 함
  // -> 여기 코드에서 useMemo는 컴포넌트가 최초로 렌더링될 때와 
  //    children 속성이 바뀔 때 words 다시 계산함

  return (
    <div style={{ textAlign: "center" }}>
      <p>{children}</p>
      <p><strong>{words.length} - words</strong></p>
    </div>
  )
}
