import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost, addPost } from "../redux/action";
import { v4 as uuidv4 } from "uuid";
const PostForm = () => {
  const dispatch = useDispatch();

  //Adding Some CSS to give a good look
  const myStyle: any = {
    backgroundColor: "white",
    minHeight: "2rem",
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");



  const [newtitle, setNewTitle] = useState("");
  const [newcontent, setNewContent] = useState("");

  const onTitleChanged = (e: any) => setTitle(e.target.value);
  const onContentChanged = (e: any) => setContent(e.target.value);

  const onSavePostClicked = () => {
    const newPost = {
      id: uuidv4(), // Generate a unique ID
      title: title,
      content: content,
    };
    dispatch(addPost(newPost));

    setTitle("");
    setContent("");
  };


  const saveChanges  = () => {
    const newPost = {
        id: uuidv4(), // Generate a unique ID
        title: newtitle,
        content: newcontent,
      };
      dispatch(addNewPost(newPost));
  
      setNewTitle("");
      setNewContent("");
  }


  return (
    <>
      <section>
        <h2>Add a New Post</h2>
        <form style={myStyle}>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />

          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <button
            style={{ margin: "10px" }}
            type="button"
            onClick={onSavePostClicked}
          >
            Save Post
          </button>
        </form>
      </section>

      <section>
        <h2>Add Another Post</h2>
        <form style={myStyle}>
          <label htmlFor="postTitle">Test1:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={newtitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <label htmlFor="postContent">Content2:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={newcontent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button
            style={{ margin: "10px" }}
            type="button"
            onClick={saveChanges}
          >
            Save Post2
          </button>
        </form>
      </section>
    </>
  );
};
export default PostForm;
