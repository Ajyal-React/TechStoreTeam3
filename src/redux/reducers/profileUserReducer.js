import {GET_PROFILE_USER} from "../actionTypes"

export const profileUserReducer = (state={}, action) =>{
    switch(action.types){
        case GET_PROFILE_USER:
            return action.payload;
        default:
            return state;
    }
}