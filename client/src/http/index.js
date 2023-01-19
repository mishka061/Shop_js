import axios from "axios";

//для обычных запросов,без авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL

})

//с авторизацией
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
//функция,которая параметром принимает
// конфиг,получаем токен
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}