import {makeAutoObservable} from "mobx";

//конструктор вызывается при создании объекта данного класса
//mobx следит за изменениями переменных,при изменении будут перерендериваться


export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Микроволновая печь"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"},
        ]
        this._brands = [
            {id: 1, name: "Sumsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "lenovo"},
            {id: 4, name: "Asus"},

        ]
        this._devices = [
            {id: 1, name: "A12", price: 10000, rating: 5, img: `https://i.ytimg.com/vi/sHJtHvpLvZ0/maxresdefault.jpg`},
            {id: 2, name: "A52", price: 28000, rating: 5, img: `14209478-fbdd-4bcc-9e78-78d163856d98.jpg`},
            {id: 3, name: "A12", price: 10000, rating: 5, img: `5289e2ca-2f0b-4aa8-a19c-abbcf88d7711.jpg`},
            {id: 4, name: "A52", price: 28000, rating: 5, img: `14209478-fbdd-4bcc-9e78-78d163856d98.jpg`},
            {id: 5, name: "A12", price: 10000, rating: 0, img: `5289e2ca-2f0b-4aa8-a19c-abbcf88d7711.jpg`},
            {id: 6, name: "A52", price: 28000, rating: 0, img: `14209478-fbdd-4bcc-9e78-78d163856d98.jpg`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._isAuth = types
    }

    setBrands(brands) {
        this._user= brands
    }
    setDevice(devices) {
        this._user = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }

}