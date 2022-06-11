import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {patient} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === "/login"
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const click = async ()=>{
        try{
            let data;
            if (isLogin){
                data = await login(email, password);
            }else{
                data = await registration(email, password);
                console.log(data)
            }
            patient.setPatient(patient)
            patient.setIsAuth(true)
            history.push(MAIN_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }

    }
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight -54}}
        >
        <Card style={{width:600}} className="p-5">
            <h2 className={"m-auto"}>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-3"
                    placeholder="e-mail..."
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Пароль..."
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    type="password"
                />
                {isLogin ?
                    <div>
                        <Button
                            className="mt-3 align-self-end"
                            variant="outline-success"
                            onClick={MAIN_ROUTE}

                        >Войти
                        </Button>
                        <p className="align-self-end">Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink></p>
                    </div>
                    :
                    <div>
                        <Button
                            className="mt-3 align-self-end"
                            variant="outline-success"
                            onClick={click}
                        >Регистрация
                        </Button>
                        <p className="align-self-end">Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink></p>
                    </div>
                }
            </Form>
        </Card>
        </Container>
    );
});
export default Auth;