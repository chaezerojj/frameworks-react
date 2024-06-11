import React, { useState, useEffect } from 'react';

// ? 2가지의 서로 다른 상태 변수가 있는 코드
// 

export default function DependencyRelation() {
  const [val, set] = useState();
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  }

  // useEffect(() => {
  //   console.log(`typing "${val}"`);
  // })
  // useEffect(() => {
  //   console.log(`saved phrase "${phrase}"`);
  // })
  // 렌더링 이뤄질 때마다 효과 호출되게는 X
  // -> useEffct 훅을 구체적인 데이터변경과 연동 시킬 필요 있음
  // ==> 의존 관계 배열 사용하기
  // 의존 관계 배열은 이펙트가 호출되는 시점을 제어함
  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val])
  // val값 바뀔때만 호출됨
  // 입력에 문자 타이핑하여 val값 변경하면 효과 발생
  useEffect(() => {
    console.log(`saved phrase "${phrase}"`);
  }, [phrase])
  // phrase값 바뀔때만 호출됨
  // 버튼 클릭 시 phrase 저장되고 val는 ""로 재설정됨

  // 의존관계 배열의 여러 값 검사 가능
  // val이 변경되거나 phrase가 변경될 때마다 어떤 효과를 실행하려고 함
  useEffect(() => {
    console.log("either val or phrase has changed");
  }, [val, phrase])

  // useEffect 두번째 인자로 빈 배열 넘기기
  // 빈 의존 관계 배열은 초기 렌더링 직후 이펙트가 단 한번만이라도 호출되게 함
  // 배열에 의존관계 X -> 효과는 초기 렌더링 직후에만 호출됨
  // 의존관계가 없다 = 변경에 반응하지 않는다.
  // -> 효과가 다시 호출되지 않음. 
  //   최초 렌더링시에만 호출되는 효과는 초기화시 유용하게 사용 가능
  useEffect(() => {
    console.log("only once after initial render");
  }, [])

  // useEffect가 함수 반환 시 컴포넌트가 트리에서 제거될 때 해당 함수 호출
  const welcomeChimePlay = () => {
    console.log("환영 벨소리.");
  }
  
  const goodbyeChimePlay = () => {
    console.log("작별 벨소리.");
  }
  
  useEffect(() => {
    // - 빈 배열에 최초 렌더링 시 환영 벨소리 울리는 함수 반환
    welcomeChimePlay();
    return () => goodbyeChimePlay();
    // 컴포넌트가 트리에서 제거될 때 이별 벨소리 울리는 함수 반환
  }, [])

  return (
    <>
      <label>Favorite phrase: </label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  )
}
