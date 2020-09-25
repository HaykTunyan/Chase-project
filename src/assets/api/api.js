import * as axios from 'axios';

const instance = axios.create({
    baseURL : 'http://freelancedeveloper.site:8000/api/v1',
})


const instanceAuth = axios.create ({
   baseURL : 'http://freelancedeveloper.site:8000/api', 
})


export const LoginApi ={
    me(token){
       return instanceAuth.get(`/token`,{
          headers: {
            Authorization: 'Bearer' + token
          }
        })
    },
    login( login,password = false){
       return instanceAuth.post(`/token`, {
          login,password
       })

    },
 }


 export const JWT = {
     getToken( token = false ) {
         return instanceAuth.get('/token'), {
             token
         }
     }
 }