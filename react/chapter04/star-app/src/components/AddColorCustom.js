import React from 'react';
// import { useInput } from './hooks/hooks';
import {useInput} from './hooks/hooks.js';

// ! 커스텀 훅
// - 제어되는 폼 컴포넌트 생성 시 필요한 세부사항을 커스텀 훅으로 묶을 수 있음
// - input 요소가 많은 폼 생성 시 필요한 중복을 추상화하여 없애는 훅 생성
// - 커스텀 훅으로 속성 전개하여 넣는 것이 코드를 복사하여 사용하는 것보다 더 좋은 코드

export default function AddColorCustom({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = e => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type='text'
          placeholder='color title...'
          required
        />
        <input 
          {...colorProps}
          type='color'
          required
        />
        <button>Add</button>
      </form>
    </>
  )
}
