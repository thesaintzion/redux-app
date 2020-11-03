import { ADD_POST } from '../constants/action-types'
export function addPost(payload){
    return {type: ADD_POST, payload}   
}