import React, { useReducer } from 'react';

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

export default function User2() {
  const [user, setUser] = useReducer((user, newDetails) => (
    { ...user }, { ...newDetails }
  ), firstUser);

  return (
    <div>
      <h1>
        {user.firstName}{user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>Location: {user.city}, {user.state}</p>
      <button
        onClick={() => {
          setUser({ admin: true })
        }}>Make Admin</button>
    </div>
  )
}
