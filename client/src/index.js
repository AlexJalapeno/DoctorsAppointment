import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import PatientStore from "./store/PatientStore";

// export const Context = createContext(null)
ReactDOM.render(
        // <Context.Provider value={{
        //     patient: new PatientStore()
        // }}>
        //     <App/>
        // </Context.Provider>,
        <App/>,
    document.getElementById('root')
)

