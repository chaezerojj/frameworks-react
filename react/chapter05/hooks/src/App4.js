import React from 'react'
import UseMousePosition from './components/UseMousePosition';

// ? useLayoutEffect
// useLayoutEffect를 사용해야 하는 경우
// 렌더링 사이클의 이벤트가 발생하는 순서
// 1. 렌더링 발동
// 2. useLayoutEffect 호출
// 3. 브라우저 화면 그리기: 이 시점에서 컴포넌트에 해당하는 엘리먼트 실제로 DOM에 추가됨
// 4. useEffect 호출됨

function App4() {
  return (
    <div>
      <UseMousePosition />
    </div>
  )
}
// App3 컴포넌트에서는 useEffect가 첫번째 훅, 그 이후 useLayoutEffect 발생
// but, 로그를 보면 useLayoutEffect가 useEffect보다 먼저 발생했음을 알 수 있음
// useLayoutEffect는 렌더링 다음 호출되지만 브라우저가 변경내역을 화면에 그리기 전에 호출됨
// 대부분의 경우 useEffect로 원하는 작업을 수행하기에 충분하지만,
// 사용하는 Effect가 브라우저 화면그리기(UI요소 모양을 화면에 표시함)에 필수적인 경우, 
// useLayoutEffect를 사용하면 됨

export default App4;