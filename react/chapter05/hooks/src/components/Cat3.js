import React, { memo } from 'react';

const Cat3 = memo(
  ({ name, meow = f => f }) => {
    console.log(`rendering ${name}`);
    // name 프로퍼티가 동일한데도 Cat이 매번 렌더링됨
    // >> meow프로퍼티 때문
    // - meow 프로퍼티는 함수로 정의할 때마다 새로운 함수 생성
    // 

    return (
      <>
        <ul>
          <li>
            <button onClick={() => meow(name)}>{name}</button>
          </li>
        </ul>
      </>
    )
  }
)

const RenderCatOnce = memo(Cat3, () => true);
const AlwayRenderCat = memo(Cat3, () => false);
// memo(Cat3, 술어(predicate))
// - 술어 - 항상 true나 false 반환. 
// - false >>Cat 재렌더링, true >> Cat 재렌더링X
// - >> 어떤 값을 반환하더라도 Cat은 최소 한번 렌더링됨

// const PureCat3 = memo(Cat3, (prevProps, nextProps) =>
//   prevProps.name === nextProps.name);
// 술어로 이전 프로퍼티와 다음 프로퍼티를 인자로 받음
// 두 객체의 name프로퍼티 비교 가능
// name이 바뀌면 컴포넌트 다시 렌더링함

// export default PureCat3;

const PureCat4 = memo(Cat3, (prevProps, nextProps) =>
  prevProps.name === nextProps.name);

export default PureCat4;