import './App.css';
import { FaStar } from "react-icons/fa"; // 꽉 찬 별
import { FaRegStar } from "react-icons/fa"; // 빈 별
import { FaStarHalfAlt } from "react-icons/fa"; // 반쪽 별
/*
  리액트 상태(state) 관리
  - 상태가 있는 컴포넌트를 만드는 방법 배우고,
    컴포넌트 트리의 아래 방향으로 상태를 전달하는 방법과
    사용자 상호작용을 컴포넌트 트리 위쪽으로 돌려보내느 방법 살펴봄
  
*/

/* 별점 컴포넌트 - 5점 만점 별점 시스템 만들기 */

// 별 -> img
function App() {
  return (
    <div className="App">
      <h2>별점 컴포넌트 만들기</h2>
      <div>
        <p>평점</p>
        <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
      </div>
      <div>
        <p>평점</p>
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
      </div>
    </div>
  );
}

export default App;
