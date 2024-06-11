import { useEffect, useState } from 'react';

// 뉴스 구독 훅 만들기
// 첫 렌더링에서 뉴스 피드 구독
// 정리함수에서 뉴스 피드 구독 취소 선택

// posts, setPosts - 상태변수와 상태변수의 상태 변경하는 함수
// addPosts 함수 - 최신 뉴스 얻어 배열에 추가
// useEffect로 뉴스 피드 구독 후 벨 울리기 -> 이후 정리함수 반환
// 정리함수 - 이별 벨 울리고 뉴스 구독 취소

const newsFeedSubscribe = (addPost) => {
  // console.log("최신 뉴스를 얻어서 배열에 추가한다.");
  addPost(
    {
      "id": "0",
      "title": "news title 01",
      "content": "news content 01"
    }
  )
  addPost(
    {
      "id": "1",
      "title": "news title 02",
      "content": "news content 02"
    }
  )
}

const welcomeChimePlay = () => {
  console.log("환영의 벨을 울린다.");
}

const newsFeedUnsubscribe = () => {
  console.log("누스 구독을 취소한다.");
}

const goodbyeChimePlay = () => {
  console.log("이별의 벨을 울린다.");
}

export const useJazzNews = () => {
  const [posts, setPosts] = useState([]);
  const addPost = (post) => {
    setPosts(allPosts => [post, ...allPosts])
  }
  // 뉴스 구독 관련 useEffect
  useEffect(() => {
    newsFeedSubscribe(addPost);
    return () => {
      newsFeedUnsubscribe(addPost);
    }
  }, [])
  // 벨 관련 useEffect
  useEffect(() => {
    welcomeChimePlay();
    return () => {
      goodbyeChimePlay();
    }
  })
  return posts;
  // -> 기능을 여러 useEffect로 나눠 담는 것이 좋음
}
