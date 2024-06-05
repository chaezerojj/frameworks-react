import "./App.css";
import StarRating from "./components/StarRating.js";

import { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './components/ColorList.js'
import AddColorForm from "./components/AddColorForm.js";

/* 재사용성을 높이기 위한 래팩터링 */
// 1. style 속성
// - css스타일 엘리먼트 추가 가능

// 컴포넌트 트리 안의 상태
// 모든 컴포넌트에 상태를 넣어야 하는 경우,
// 모든 컴포넌트에 상태 넣는 것은 좋지 않음
// 상태 데이터가 너무 많은 컴포넌트에 분산되면 
// 버그를 추적하거나 애플리케이션 기능 변경 어려움
// -> 컴포넌튼 트리에서 어느 부분에 상태가 존재하는지 알기 어렵기 때문
// >> 어플 상태나 어떤 특성의 상태를 한 곳에 관리할 수 있으면 상태 이해 쉬워짐

// 상태를 한 곳에서 관리하는 방법
// - 상태를 컴포넌트 트리에 저장 & 자식 컴포넌트들에게 prop으로 전달

// 색의 목록 관리 애플리케이션
// - 사용자가 목록에 있는 색에 대해 별점과 제목을 부여할 수 있게 함

// App 컴포넌트: 앱에서 상태 저장할 유일한 컴포넌트

// App 컴포넌트의 상태에 저장된 color의 색 평점을 변경
// -> onRemoveColor에 적용했던 방식을 그대로 onRate이벤트에 적용

// 클릭된 각 별로부터 새 평점을 수집하여 StarRating의 부모에 전달

function App() {
  const [colors, setColors] = useState(colorData.color);
  return <>
  <AddColorForm />
    <ColorList
      colors={colors}
      onRemoveColor={(id) => {
        // 매개변수로 넘어온 id값을 사용해 색을 제거함
        const newColor = colors.filter(color => color.id !== id);
        setColors(newColor);
      }}
      onRateColor={(id, rating) => {
        // 배열에서 id값이 일치하는 것을 찾아 rating값을 변경 후 새 배열 생성
        // -> 훅을 통해 새 배열 대입
        const newColor = colors.map(color => {
          return color.id === id ? { ...color, rating } : color;
        })
        setColors(newColor);
      }}
    />
  </>
}

export default App; 