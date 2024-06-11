import React, { useEffect, useState } from 'react'

// 의존 관계 깊게 검사하기
// - 문자열이나 수 등의 자바스크립트 기본 타입은 비교 가능
// - 일반적으로 예상 가능한 어떤 문자열이 다른 문자열과 동등한지 비교 가능
// - 

export function UseAnyKeyToRender() {
  if ("gnar" === "gnar") {
    // console.log("gnarly!!");
  }
  // 객체, 배열 함수 등을 비교하려고 하면 비교 방법이 달라짐.
  // e.g., 두 배열을 비교할 때,
  if ([1, 2, 3] != [1, 2, 3]) {
    // console.log("두 배열은 같지만 서로 같지 않다.");
  }
  // -> 배열의 길이와 원소가 같지만 같지 않은 이유
  // == 서로 다른 배열 인스턴스를 가짐
  // - 자바스크립트에서는 배열, 객체, 함수는 서로 같은 인스턴스일때만 서로 같음
  // useEffect 의존 관계 배열

  // 키보드 눌러질 때마다 컴포넌트를 다시 렌더링하는 훅 생성
  const [forceRender] = useState();

  useEffect(() => {
    // 브라우저 객체 모델 (BOM)
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, [])
  // 강제 렌더링 하기 위해 상태 변경 함수 호출
  // 컴포넌트가 최초로 렌더링될 대 keydown이벤트 리슨
  // 키 누르면 forceRender 호출 -> 컴포넌트 강제 렌더링
  // keydown이벤트 리슨 중단하는 정리함수 반환
  // 훅을 컴포넌트에 추가함으로써 단지 키를 누르기만 해도 컴포넌트 다시 렌더링 가능
  
} 
