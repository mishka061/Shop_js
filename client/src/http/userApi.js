//автроризация,регистрация,проверка токена на валидность
import {$host} from "./index";
//import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const response = await $host.post('api/user/registration', {email, password, role:'ADMIN'})
    return response
        }
export const login = async (email, password) => {
    const response = await $host.post('api/user/login', {email, password})
    return response
        }
export const check = async () => {
    const response = await $host.post('api/auth/registration' )
    return response
        }