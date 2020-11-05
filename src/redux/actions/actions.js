import { ADD_POST, GET_POSTS } from '../constants/action-types';


export function addPost(payload) {
    return { type: ADD_POST, payload };
}

export function getApiPosts() {
  return function(dispatch){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      return dispatch({ type: GET_POSTS , payload: json });
    }).catch( err => {
      console.log('Error getting posts...', err);
    });
  }
}