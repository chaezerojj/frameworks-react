import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About, Home, Products } from './Pages';

/* 
? Route
- 렌더링할 경로에 래퍼 컴포넌트

? Routes
- 렌더링할 각 페이지에 Route 넣음

* react-router-dom
: 브라우저 링크를 만들어주는 Link라는 컴포넌트 제공함
*/

function App2() {
  return (
    <>
    <div>
      <h1>[회사 웹사이트]</h1>
      <nav>
        <ul>
          <li><Link to="/">첫페이지</Link></li>
          <li><Link to="about">회사 소개</Link></li>
          <li><Link to="products">제품</Link></li>
        </ul>
      </nav>
    </div>
      <Routes>
        {/* 브라우저 주소가 path와 일치하면 element 표시됨 */}
        {/* <Route path="/" element={<렌더링 할 페이지 />} /> */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </>
  )
}

export default App2;