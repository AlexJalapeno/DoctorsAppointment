import {makeAutoObservable} from "mobx";

export default class PatientStore{
    constructor() {
        this._isAuth=false
        this._patient = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setPatient(patient){
        this._patient= patient
    }
    get isAuth(){
        return this._isAuth
    }
    get patient(){
        return this._patient
    }
}