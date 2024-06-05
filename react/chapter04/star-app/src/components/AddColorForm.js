import React from 'react';
import { useRef } from 'react';

// ! 리액트 참조 사용하기
// ? 리액트에서 form 만들어야 할 때 사용하는 패턴들
// - 참조(ref) 패턴 기능 - 직접 DOM에 접근하는 방법
// - 리액트에서 참조란?
//   = 컴포넌트의 생명주기(life cycle)값 저장 객체
// - 리액트에서 참조 제공 시 useRef 훅 사용
// - import { useRef } from 'react';

export default function AddColorForm({ onNewColor = f => f }) {
  // useRef 사용하여 2가지 참조 생성
  // -> ref 속성을 사용하여 jsx에 참조값 직접 설정함
  const txtTitle = useRef();
  // - 색 이름 수집을 위해 폼에 추가한 텍스트 입력에 대한 참조
  const hexColor = useRef();
  // - HTML색 입력의 16진색 값 접근 위한 참조

  const submit = (e) => {
    e.preventDefault(); // 리셋 방지
    const title = txtTitle.current.value; // 색이름 
    const color = hexColor.current.value; // 색
    onNewColor(title, color);
    // title과 color를 입력받음
    txtTitle.current.value = ""; // input 초기화
    hexColor.current.value = ""; // input 초기화
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          ref={txtTitle}
          type="text"
          placeholder='color title...'
          required />
        <input
          ref={hexColor}
          type="color" />
        <button>Add</button>
      </form>
    </>
  )
}
