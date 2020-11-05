import { ADD_POST, GET_POSTS } from '../constants/action-types'

const initialState = {
    posts: [],
    apiPosts: []
}

 function rootReducer(state = initialState, action) {
     if(action.type === ADD_POST){
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
          });
     }

     if(action.type === GET_POSTS){
        return Object.assign({}, state, {
            apiPosts: state.apiPosts.concat(action.payload)
          });
     }
    return state;
}

export default rootReducer;
