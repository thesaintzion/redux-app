import { ADD_POST, GET_POSTS, API_ERROR } from '../constants/action-types'

const initialState = {
    posts: [],
    apiPosts: [],
    error: ''
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

     if(action.type === API_ERROR){
        return {
            ...state,
            error: action.payload

        }
     }
    return state;
}

export default rootReducer;
