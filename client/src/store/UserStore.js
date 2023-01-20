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