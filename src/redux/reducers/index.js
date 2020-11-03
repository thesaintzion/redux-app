import { ADD_POST } from '../constants/action-types'

const initialState = {
    posts: []
}

 function rootReducer(state = initialState, action) {
     if(action.type === ADD_POST){
         state.posts.push(action.payload);
     }
    return state;
}

export default rootReducer;
