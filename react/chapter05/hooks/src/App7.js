import React, { useCallback, useState } from 'react'
import PureCat3 from './components/Cat3';
import PureCat4 from './components/Cat3';

export default function App7() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  // useCallback과 useMemo를 사용하여 함수나 객체를 메모화
  // useCallback 사용하여 meow함수가 바뀌지 않았다는 사실 보장
  // 컴포넌트 트리에서 재렌더링 과하게 발생되면 해당 함수 사용하여 성능 개선 가능
  const meow = useCallback(name => console.log(`${name} has meowed.`), [])

  return (
    <>
    <h3>Cat list</h3>
      {
        cats.map((name, i) =>
          // <PureCat3
          //   key={i}
          //   name={name}
          //   meow={name => console.log(`${name} has meowed`)}
          // />
          <PureCat4 />
          )
      }
      <button
        onClick={() =>
          setCats([...cats, prompt("Name a cat")])}>
        Add a Cat</button>
    </>
  )
}

// 언제 성능 개선을 해야 하나?
// 1. 성능 개선을 위한 리팩토링
// - useMemo, useCallback, memo가 과용되는 경향이 있음
//   성능 최적화를 위한 다른 리팩토링은 개발 마지막 단계에 이루어져야야 함.
// - useCallback, useMemo를 빈번하게 사용하면 성능 떨어짐
// - 화면 정지, 깜빡임 해소를 목표로 사용 ok, but 무분별하게 사용하면
//   앱 속도 저하 & 비용 과다 함수 될 수 있음

// 크롬 or 파이어폭스 리액트 개발자 도구 확장 설치
// - 리액트 프로파일러 포함되어 있음
// - 각 컴포넌트 성능 측정 가능
// - 리팩토링 전 항상 앱 작동 확인 및 점검
//   (과도한 리팩토링 또는 앱 제대로 작동하기 전 리팩토링 하는 것은 
//    코드가 제대로 작동하지 않거나 버그가 생길 수 있음)
