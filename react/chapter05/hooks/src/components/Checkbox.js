import React, { useState, useEffect } from 'react';

// ! 리액트 hooks
// ? useEffect
// - 렌더링 후에도 계속 발생하기 위해 사용하는 훅
// - 렌더링 -> 앱 처음 적재 시 발생, 프롭 or 상태값 변경될 때도 발생

export default function Checkbox() {
  const [checked, setChecked] = useState(false);
  // alert(`checked: ${checked.toString()}`)
  // alert를 랜더러 직전에 삽입하여 렌더러를 블록함
  // 사용자가 알림창의 ok 버튼 클릭 전에는 컴포넌트 렌더링 X
  // alert는 블러킹 함수이기 때문에 
  // ok 누르기 전에는 체크박스의 다음 상태가 렌더링된 모습 볼 수 X
  // return문 뒤에 있는 코드는 결코 실행되지 못하기 때문에 alert를 return 뒤에 넣을 수 X
  
  // => useEffect 사용하여 alert창 띄우기
  // - useEffect 함수 안에 alert창 넣기 
  // -> 함수 렌더러가 렌더링 후 부수 효과로(side effect)로 실행한다는 뜻
  
  // useState와 checked값 변경해주는 함수
  // - 사용자는 박스를 체크하거나 체크 해제 가능
  // - 박스가 체크된 다음 사용자에게 알림창 띄우기
  
  // useEffect(() => {
  //   alert(`checked: ${checked.toString()}`)
  // });
  // 렌더러가 부수효과로 무언가 수행하게 하고 싶을 때 useEffect 사용
  // - checked함수 - UI 렌더링 
  // 만약 컴포넌트가 다른 일 하길 원한다면,
  //  UI 렌더링 외 컴포넌트가 수행해야 하는 일을 효과(effect)라고 부름
  // alert, consolo.log, 브라우저나 네이티브 API와의 상호작용은 렌더링에 속하지 않음.
  // -> 컴포넌트 함수 반환값에 포함 X
  // useEffect 사용하려면 렌더링 끝나기 기다렸다가 alert나 console.log등에 값 제공할 수 있음

  useEffect(() => {
    console.log(checked ? "checked" : "not checked");
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}
