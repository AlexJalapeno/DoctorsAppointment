import React from 'react';
import {Button, Card, Container, Form, NavLink} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTATION_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === {LOGIN_ROUTE}
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
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Пароль..."
                />
                <Button className="mt-3" variant="outline-success">
                    Войти
                </Button>
                {isLogin ?
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                Нет аккаунта?
                            </div>
                            <div className="col-sm">
                                <NavLink to={REGISTATION_ROUTE}>{isLogin ?"Регистрация":"Авторизация"}</NavLink>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                Есть аккаунт?
                            </div>
                            <div className="col-sm">
                                <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>
                            </div>
                        </div>
                    </div>
                }
            </Form>
        </Card>
        </Container>
    );
};

export default Auth;