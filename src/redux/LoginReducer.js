import { LoginApi } from "../assets/api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA ='SET_USER_DATA'

let initialState =  {
        userId : null,
        login : null,

}

const token = localStorage.token

const LoginReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_USER_DATA :
            return {
                ...state, 
                ...action.payload,
            }
        default:
             return state
    }
}

export const SetAuthUserData = (userId,login) =>{
    return {
        type: SET_USER_DATA,
        payload :{userId,login}
    }
}


export const getAuthUserData = () => (dispatch) => {
    return LoginApi.me(token)
    .then(response => {
           if (response.data.resultCode ===0){
               let {id,login} = response.data.data
               dispatch(SetAuthUserData(id,login,login,true))
           }
       
    }) 
}
export const login = (login,password) => (dispatch) => {
  
    LoginApi.login(login,password)
    .then(response => {
        localStorage.setItem ('token', response.data.access_token)
           if (response.data.access_token){
                dispatch(getAuthUserData())
           }else{
               dispatch(stopSubmit("login",))
           }
       
    }) 
}


export default LoginReducer