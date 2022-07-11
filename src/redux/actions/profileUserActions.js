import axios from "axios"
import {GET_PROFILE_USER} from '../actionTypes';


export const getProfileUser = ()=>{
    return async (dispatch,getStore) => {
        try{
            const store = getStore();
            // console.log("zzzzzzzzzzzzz",store);
            const config = {
                headers:{
                'Content-Type': 'application/json',
                "Authorization": "Bearer ${store.ReducerForUser.token}"
                }
            }
            const response = await axios.get('https://omar-tech-store.herokuapp.com/api/users/profile',config);
           localStorage.setItem("profileData",JSON.stringify(response.data));
            dispatch({
                type:GET_PROFILE_USER,
                payload:response.data
            });
        }catch(error){
            console.log("error in get Profile =>", error);
        }
    }
}