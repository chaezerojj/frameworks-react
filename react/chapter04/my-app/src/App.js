/*
  리액트 상태(state) 관리
  - 상태가 있는 컴포넌트를 만드는 방법 배우고,
    컴포넌트 트리의 아래 방향으로 상태를 전달하는 방법과
    사용자 상호작용을 컴포넌트 트리 위쪽으로 돌려보내느 방법 살펴봄
*/
import './App.css';
// 별 -> npm i react-icons --save / npm i react-icon --save
import { FaStar } from "react-icons/fa"; // 꽉 찬 별
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

/* 별점 컴포넌트 - 5점 만점 별점 시스템 만들기 */
// 점수에 따라 선택된 별은 빨간색, 선택되지 못한 별은 회색
// 선택된 속성에 따라 자동으로 별을 만들어내는 컴포넌트

const Star = ({ selected = false }) => {
  return <FaStar color={selected ? "red" : "gray"} size="2em" />
}

// 인자로 전달된 개수만큼 배열 생성 함수
const createArray = (length) => [...Array(length)] // 길이에 맞는 배열 생성됨

// 사용자가 선택한 별의 개수는 별점을 표현함
// selectedStars 상태변수: 사용자가 선택한 별점을 저장
// - StarRating컴포넌트에 useState 훅 직접 추가해서 변수 생성

// 10점 만점 시스템 (더 자세한 정보 제공 가능)
function StarRating({ totalStars = 5 }) {
  // totalStars=5 : 기본값이 5인 인자를 받음
  // useState: 배열을 반환하는 호출 가능 함수
  // 해당 배열의 첫번째 값 = 사용하려는 상태변수
  // - 여기서 변수는 selectedStars, 
  //   이 변수값은 StarRating에서 빨간색으로 칠해야 하는 별 개수
  // 배열 구조분해를 활용하면 상태변수에 이름을 쉽게 붙일 수 있음
  // useState함수에 전달하는 값 = 상태변수의 디폴트값
  const [selectedStars] = useState(3); // selectedStars의 초기값: 3
  return <>
    {createArray(totalStars).map((n, i) =>
      <Star key={i} selected={selectedStars > i} />)}
    <p>{selectedStars} of {totalStars} stars</p>
  </>
}

// 사용자가 별을 클릭하여 점수를 바꿀 수 있도록 하기
// - 점수는 rating이라는 변수에 저장
// - 점수 값은 리액트 상에 이 값을 저장하고 변경하도록 함
// - 상태를 리액트 함수 컴포넌트에 넣을 때는 hooks 기능 사용
// - hooks? -> 컴포넌트 트리와 별도로 재사용가능한 코드 로직 들어있음
// - 만들어둔 컴포넌트에 기능을 넣기 가능. 
// 리액트 기본 제공 훅들 => 리액트 패키지 import해서 사용
// useState - 상태를 리액트 컴포넌트 추가하고 싶을 때 사용 

function App() {
  return (
    <div className="App">
      <div className='star-component'>
        <h2>별점 컴포넌트 만들기</h2>
        <FaStar color='yellow' />
        <FaStar color='pink' />
        <FaStar color='red' />
        <FaStar color='green' />
        <FaStar color='purple' />
        <div>
          <StarRating />
        </div>
        {/* <div>
       <FaHeart /> <FaRegHeart />
      </div> */}
      </div>
    </div>
  );
}

export default App;
