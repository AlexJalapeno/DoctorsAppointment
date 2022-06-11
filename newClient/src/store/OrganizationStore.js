import {makeAutoObservable} from "mobx";

export default class OrganizationStore{
    constructor() {
        this._organizations=[
            {id:1,name:'Областная больница №1'},
            {id:2,name:'Городская полилинника №5'}
        ]
        makeAutoObservable(this)
    }

    setServices(organizations){
        this._organizations= organizations
    }
    get organizations(){
        return this._organizations
    }
}