import { ADD_POST } from '../constants/action-types'

const initialState = {
    posts: []
}

 function rootReducer(state = initialState, action) {
     if(action.type === ADD_POST){
        return Object.assign({}, state, {
            posts: state.articles.concat(action.payload)
          });
     }
    return state;
}

export default rootReducer;
