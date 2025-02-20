import { combineReducers } from 'redux';
import { ADD_NEW_POST, ADD_POST, DELETE_NEW_POST, DELETE_POST } from './action';


const initialState = {
  posts: [],
};

const newinitialState = {
    list: [],
  };
  

const postsReducer = (state = initialState, action: any) => {
    console.log(state, action)
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: any) => post.id !== action.payload),
      };
    default:
      return state;
  }
};




const NewReducer = (state = newinitialState, action: any) => {
    console.log(state, action)
  switch (action.type) {
    case ADD_NEW_POST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_NEW_POST:
      return {
        ...state,
        list: state.list.filter((post: any) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
    posts: postsReducer,
    list: NewReducer
});