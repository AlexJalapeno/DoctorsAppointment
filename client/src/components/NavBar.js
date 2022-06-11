import React from 'react';
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <NavLink to={MAIN_ROUTE}>Медицина-72</NavLink>
                <Nav className="ml-auto">
                    <Button variant={"outline-light"} className="ml-2">Авторизация</Button>
                    <Button variant={"outline-light"} className="ml-2">Авторизация</Button>
                    <Button variant={"outline-light"} className="ml-2">Авторизация</Button>
                    <Button variant={"outline-light"} className="ml-2">Авторизация</Button>
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;