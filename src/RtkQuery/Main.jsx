import React from 'react';
import { useGetPostsQuery } from './services/jsonPlaceholderApi.js'; 

function Main() {
  const { data, error, isLoading } = useGetPostsQuery(); 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.map(post => (
          <li key={post.id}>{post.title}</li> 
        ))}
      </ul>
    </div>
  );
}

export default Main;