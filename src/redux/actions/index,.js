import { ADD_POST } from '../constants/action-types'
export function addPost(newPost){
    return {type: ADD_POST, payload: newPost}   
}