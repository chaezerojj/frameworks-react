import React from 'react';

// 컴포넌트 성능 개선
// - 리액트에선 컴포넌트가 일반적으로 많이 렌더링됨
// - 불필요한 렌더링을 피하고 렌더링이 전파되는데 걸리는 시간을 줄이는 등
//   활동이 성능 개선에 포함됨
// - 블필요한 렌더링 방지 위해 도움되는 React.memo, useMemo, useCallback 등의 도구 제공

// ? useMemo, useCallback 활용하여 웹사이트 성능 향상시키기

// memo - 순수한 컴포넌트 생성 시 사용
// - 순수 컴포넌트: 같은 프로퍼티에 대해 항상 같은 출력으로 렌더링되는 컴포넌트

const Cat = ({ name }) => {
  console.log(`rendering ${name}`)
  return <p>{name}</p>
}

export default Cat