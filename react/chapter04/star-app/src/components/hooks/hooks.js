import { useState } from 'react';


// * 커스텀 훅 
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: e => setValue(e.target.value)},
    // - 배열의 첫번째 원소: 앞에서 복사하여 붙여넣고 싶었던 속성들
    () => setValue(initialValue)
    // - 배열의 두번째 원소: value값을 초기값으로 재설정할 때 사용할 함수
  ]
}
