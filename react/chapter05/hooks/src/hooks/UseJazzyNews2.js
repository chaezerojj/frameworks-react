import React, { useEffect, useMemo } from 'react'

// UseJazzyNews훅 개선해보기
// - 새로운 포스트가 들어올 때마다 newPostChimePlay() 호출
// - posts: 배열
// - useMemo 사용하여 배열 값을 메모화

const newPostChimePlay = () => {
  console.log("새로운 포스트가 추가되었음을 알리는 벨이 울립니다.");
}

export const useJazzyNews2 = () => {
  const [posts, setPosts] = useState([]);
  const addPost = post => setPosts(allPosts => [post, ...allPosts]);
  const _posts = useMemo(() => posts, [posts])

  useEffect(() => {
    newPostChimePlay();
  }, [_posts])
  // -> 새 포스트가 도착할 때마다 useJazzyNews2 훅이 벨을 울림.
  // -> posts 배열이 바뀔 때마다 차임벨 울리는 효과 추가

  useEffect(() => {
    newsFeedSubscribe(addPost);
    return () => newsFeedUnsubscribe(addPost);
  }) 

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
}