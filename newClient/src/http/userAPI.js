import {$host,$authHost} from "./Index";
import jwt_decode from "jwt-decode";
export const registration = async (email,password)=>{
    const {data} = await $host.post('api/patient/registration', {email,password})
    return jwt_decode(data.token)
}
export const login = async (email,password)=>{
    const {data} = await $host.post('api/patient/login', {email,password})
    return jwt_decode(data.token)
}
export const check = async ()=>{
    const response = await $host.post('api/patient/registration')
    return response
}