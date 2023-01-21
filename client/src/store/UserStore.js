import {makeAutoObservable} from "mobx";

//конструктор вызывается при создании объекта данного класса
//mobx следит за изменениями переменных,при изменении будут перерендериваться


export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }
    //экшины сетеры(функции), которые изменяют состояние
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    //гетеры вызывается если переменная была изменена
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}
//import {makeAutoObservable} from "mobx";
//
//export default class UserStore{
//    constructor() {
//        this._isUser = {}
//        this._isAuth = false
//        this._isRole = {}
//
//        makeAutoObservable(this)
//    }
//    setIsUser(bool){
//        this._isUser = bool
//    }
//
//    setIsAuth(bool){
//        this._isAuth = bool
//    }
//
//    setUser(bool){
//        this._isRole = bool
//    }
//
//    get isAuth() {
//        return this._isAuth
//    }
//    get isUser(){
//        return this._isUser
//    }
//    get isRole(){
//        return this._isRole
//    }
//}