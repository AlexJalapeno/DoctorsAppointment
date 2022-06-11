// import {makeAutoObservable} from "mobx";
//
// export default class ServiceStore{
//     constructor() {
//         this._services=[
//             {id:1,name:'Запись к врачу'},
//             {id:2,name:'Запись к хирургу'},
//             {id:1,name:'Запись к терапевту'}
//         ]
//         makeAutoObservable(this)
//     }
//
//     setServices(services){
//         this._services= services
//     }
//     get services(){
//         return this._services
//     }
// }