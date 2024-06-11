import React from 'react';
import { useJazzNews } from "../hooks/CustomHooks";

// 뉴스 피드 커스텀 훅
// - 뉴스 피드를 처리하는 모든 기능이 들어있음
// - 이 기능을 다른 컴포넌트와 쉽게 공유 가능
// - 여기서 커스텀 훅 사용

export default function NewsFeed({ url }) {
  const posts = useJazzNews();

  return (
    <>
      <h1>{posts.length} articles</h1>
      {posts.map(post => (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ))}
    </>
  )
}
