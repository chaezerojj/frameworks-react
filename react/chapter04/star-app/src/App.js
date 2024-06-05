import "./App.css";
import StarRating from "./components/StarRating.js";

import { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './components/ColorList.js'

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

function App() {
  const [colors]=useState(colorData.color);
  return <ColorList colors={colors} />
}

export default App;