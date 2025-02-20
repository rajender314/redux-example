import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  deleteNewPost, deletePost } from '../redux/action';

const PostContainer = () => {
  const {posts} = useSelector((state: any) => state.posts)
  const {list} = useSelector((state: any) => state.list)

  const dispatch = useDispatch();

  
  const handleDeletePost = (postId: any) => {
    dispatch(deletePost(postId));
  };

  return (
    <div>
    <h2>Posts</h2>
       <div className="box">
        {posts.map((post: any) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div> 
      ================================================================
      <h2>Lists</h2>
       <div className="box">
        {list.map((post: any) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <button onClick={() =>  dispatch(deleteNewPost(post.id))}>Delete</button>
          </div>
        ))}
      </div> 

       
    </div>
  );
};

export default PostContainer;