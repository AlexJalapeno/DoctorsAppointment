import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PatientStore from "./store/PatientStore";
import ServiceStore from "./store/ServiceStore";
console.log(process.env.REACT_APP_API_URL)
export const Context = createContext(null)
console.log(new ServiceStore())
ReactDOM.render(
        <Context.Provider value={{
            patient: new PatientStore(),
            service: new ServiceStore()
        }}>
            <App/>
        </Context.Provider>,
    document.getElementById('root')
)


