import React, { useState } from 'react';

// ? useReducer로 복잡한 상태 처리하기
// 상태가 더 복잡해질때 useReducer로 상태 갱신을 예측 가능하게 처리

const firstUser = {
  id: 0,
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@tnwilsons.com",
  admin: false,
}

// firstUser를 초기 상태로 설정한 User 컴포넌트
// - 적절한 데이터를 표시해줌

export default function User() {
  const [user, setUser] = useState(firstUser);

  return (
    <div>
      <h1>
        {user.firstName}{user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>Location: {user.city}, {user.state}</p>
      <button
        onClick={() => {
          // setUser({ admin: true })
          // firstUser의 상태를 덮어써서 {admin:true}만 있게 됨
          // - 상태 관리 시 상태를 덮어쓰는 경우는 많이 하는 실수
          setUser({...user, admin:true})
          // >> 현재 값을 사용자와 분리하고 admin값을 덮어쓰기
          // but 이렇게 작성하면 모든 onClick을 이런 식으로 수정해야 함
        }}>Make Admin</button>
    </div>
  )
}
