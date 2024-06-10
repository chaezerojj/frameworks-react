import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import colors from './color-data.json';
import AppContext from './AppContext';
import ColorProvider from './ColorProvider';
import ColorListContext from './components/ColorListContext';

// ! 리액트 콘텍스트
// - 데이터를 위한 택시와 같은 역할

// - 기존 - 트리 루트의 한 위치에 상태를 관리하는 패턴으로 만들어짐
// - prop을 통해 상태를 컴포넌트 트리의 위 아래로 전달할 수 있음
//   => 리액트 개발자들에게 필수 통과 의례 같은 것
//      모든 리액트 개발자들은 어떻게 상태가 양방향으로 전달될 수 있는지 알아야 함
// - 리액트 발전& 컴포넌트 트리 커지면서 상태를 한 곳에 유지하는 원칙이 비현실적이게 됨
// - 컴포넌트에 도달하기 위해 중간 컴포넌트를 불필요하게 거쳐 프롭 형태로 전달 (비효율적)
//   => 상태를 여러 노드에 거쳐 트리 위아래로 전달하는 과정에서 버그 발생 쉬워짐
//    (상태를 한 위치에 유지하기 어려워짐)

// * 콘텍스트 프로바이더
// - 데이터를 리액트 콘텍스트에 넣기 가능
// - 데이터 허브 이기도 함
// - 콘텍스트 프로바이더에서 시작하여 다른 컴포넌트로 도착. 

// ? 콘텍스트 색 넣기
// - 콘텍스트 사용 시 먼저 콘텍스트 프로바이더에 데이터 삽입 후 프로바이더를 컴포넌트 트리에 추가
// - createContext함수: 새로운 콘텍스트 객체 생성
// - 만들어진 콘텍스트 객체에는 context Provider와 context Consumer 포함되어 있음

// ? color-data.json 파일에서 찾은 디폴트 색 정보를 콘텍스트에 넣기
// - 어플 진입점인 index.js파일에 콘텍스트 추가

// createContext 사용하여 새로운 리액트 콘텍스트 생성 후 ColorContext로 정의
export const ColorContext = createContext();

// 색 콘텍스트 -> ColorContext.Provider와 ColorContext.Consumer 들어있음
// - 색에 상태 넣기 위해서 Provider 사용
// - Provider value 설정 시 콘텍스트에 데이터 추가 가능

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ColorProvider>
      <AppContext />
    </ColorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
