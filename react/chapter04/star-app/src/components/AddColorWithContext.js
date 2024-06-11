import React from 'react';
import { useInput } from './hooks/hooks';
import { useColors } from '../ColorProvider';

// AddColorWithContext.js
// - addColor함수를 통해 직접 색 추가
// - 색 추가, 색 별점 부여, 색 제거 시 콘텍스트 colors값 상태 변경
// - 상태 변경 시 ColorProvider 자식들은 새 콘텍스트 데이터로 재랜더링됨

export default function AddColorWithContext() {
  const [titleProps, resetTitle] = useInput();
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

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
