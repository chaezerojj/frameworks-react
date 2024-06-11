import React, { useEffect } from 'react';
import Checkbox from './components/Checkbox';
import DependencyRelation from './components/DependencyRelation';
import NewsFeed from './components/NewsFeed';
import { UseAnyKeyToRender } from './hooks/DeepEffects';

// ? Hooks로 컴포넌트 개선하기
// - 리액트에서 기본적으로 제공하는 훅들
// - 컴포넌트 성능 최적화 시 도움

function App() {
  // 키 누를때마다 App 컴포넌트 렌더링됨.
  // 렌더링될 때마다 콘솔에 fresh render 출력하여 보여줌
  UseAnyKeyToRender();

  // word 변경 시 App컴포넌트 다시 렌더링함
  // 모든 keydown이벤트에 대해 useEffect 호출 대신,
  // 첫번째 렌더링 다음이나 word값이 바뀔때마다 함수 호출됨
  // const word = "gnar";
  // useEffect(() => {
  //   console.log("fresh render");
  // }, [word])

  // 한 단어 대신 단어로 이루어진 배열 사용
  const words = ["foo", "bar", "barz"]; // word 변수가 배열 참조
  // words가 변경되었다 가정하고 그에 따라 "fresh render" 호출됨
  // 배열이 매번 새로 생성된 인스턴스이기 때문에,
  // 이 인스턴스는 매번 새로운 렌더링을 발생시키는 변경을 등록하게 됨

  // 의존 관계 배열은 함수밖에 선언된 words 인스턴스
  // words가 항상 최초 렌더링될 때와 똑같은 인스턴스를 가리켜 최초 한번 제외 후 콘솔 호출 X
  useEffect(() => {
    console.log("fresh render");
  }, [words])

  return (
    <div className="App">
      {/* <Checkbox />
      <div>
        <DependencyRelation />
      </div>
      <NewsFeed /> */}
    </div>
  );
}

export default App;
