import {Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {useContext} from "react";
import {Context} from "../index";

const AppRouter = () => {
    const {patient} = useContext(Context)
    console.log(patient)
    console.log(!patient.isAuth)
    return (
            <Switch >
                {patient.isAuth && (authRoutes.map(({path, Component})=>
                    <Route key={path} path={path} element={Component} exact/>
                ))}
                {publicRoutes.map(({path,Component})=>
                    <Route key={path} path={path} component={Component} exact/>
                )}
            </Switch >
    );
};

export default AppRouter;