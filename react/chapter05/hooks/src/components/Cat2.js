import React, { useState, memo } from 'react';

// memo 함수 사용 시 프로퍼티 변경될때만 다시 렌더링되는 컴포넌트 생성

const Cat2 = ({ name }) => {
  console.log(`rendering ${name}`);

  return (
    <>
      <p>{name}</p>
    </>
  )
}

const PureCat2 = memo(Cat2);
// 프로퍼티 변경 시에 Cat 다시 렌더링

export default PureCat2