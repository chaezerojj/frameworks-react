import React, { useReducer, useState } from 'react';


export default function Checkbox2() {
  // const [checked, setChecked] = useState(false);
  
  // toggle 함수를 제공하여 익명으로 이벤트 핸들러 함수와 같은 일 처리
  // function toggle(){
  //   setChecked(checked => !checked)
  // } 
  // onChange는 예측 가능한 값이 toggle로 설정됨.
  // checkbox 컴포넌트 사용할 때마다 예측가능한 결과 내놓게 할 수 있음

  
  //! useReducer
  // : 현재 상태를 받아 새 상태를 반환하는 함수
  // - 로직을 리듀서 함수로 추상화하여 항상 같은 값 반환하게 함

  const [checked, toggle] = useReducer(checked => !checked, false);
  // 리듀서 함수와 초기 상태를 false로 받음
  // toggle함수는 리듀서 함수(checked => !checked)를 호출해줌

  return (
    <div>
      {/* <input 
        type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />  */}
      {/* 
        복잡한 코드
        -> 잘못 보내면 코드 전체 깨질 가능성 O
      */}
      <input 
        type="checkbox"
        value={checked}
      />
      <h1>{checked ? "checked" : "not checked"}</h1>
    </div>
  )
}
