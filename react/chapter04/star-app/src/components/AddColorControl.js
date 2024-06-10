import React, { useState } from 'react';
import { useRef } from 'react';

// ! 제어가 되는 컴포넌트
// - 폼 값을 DOM이 아닌 리액트로 관리
// - 리액트가 폼의 상태를 모두 제어
// - 장점: 튼튼한 폼 검증 기능 등의 추가가 훨씬 숴워짐
// 제어되는 컴포넌트 -> 여러 번 다시 렌더링됨
// 시간이 오래걸리는 처리 추가하지 않도록 해야 함 (비용 문제 발생 우려)

export default function AddColorControl({ onNewColor = f => f }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000"); // 기본 색 설정
  // 참조 사용 대신 title, color 값을 리액트 상태를 통해 저장

  const submit = (e) => {
    e.preventDefault(); // 리셋 방지
    onNewColor(title, color);
    setTitle("");
    setColor("");
  };

  // 사용자가 title필드에 새로운 문자 입력할 때마다 AddColorForm 다시 렌더링됨
  // (ColorPicker도 동일함)
  // -> 리액트에서는 이러한 부하를 처리할 수 있도록 설계됨

  return (
    <>
      <form onSubmit={submit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='color title...'
          required
        />
        <input
          value={color}
          onChange={e => setColor(e.target.value)}
          type="color"
          required
        />
        <button>Add</button>
      </form>
    </>
  )
}
