export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

export const addPost = (post: any) => ({
  type: ADD_POST,
  payload: post,
});

export const deletePost = (postId: any) => ({
  type: DELETE_POST,
  payload: postId,
});

export const ADD_NEW_POST = 'ADD_NEW_POST';
export const DELETE_NEW_POST = 'DELETE_NEW_POST';
export const addNewPost = (post: any) => ({
    type: ADD_NEW_POST,
    payload: post,
  });
  
  export const deleteNewPost = (postId: any) => ({
    type: DELETE_NEW_POST,
    payload: postId,
  });