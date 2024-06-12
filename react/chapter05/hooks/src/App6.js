import React, { useState } from 'react'
import PureCat2 from './components/Cat2';

// 새 고양이 이름 추가 시 콘솔에 추가된 PureCat컴포넌트만 렌더링됨

export default function App6() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <div>
      {
        cats.map((name, i) =>
          <PureCat2 key={i} name={name} />)
      }
      <button
        onClick={() =>
          setCats([...cats, prompt("Name a cat")])}>
        Add a Cat</button>

    </div>
  )
}
