import React, {useContext} from 'react';
import {Container, ListGroup, Row} from "react-bootstrap";
import {Context} from "../index";
import ServiceBar from "../components/ServiceBar";
// import OrganizationBar from "../components/OrganizationBar";
// import ServiceBar from "../components/ServiceBar";

const Main = () => {
    return (
        <Container>
            <Row>
            <div>
                Выбор по услугам
                <ServiceBar/>
            </div>
            <div>
                Выбор по организациям
                <ListGroup className="w-25">
                    <ListGroup.Item>Городская поликлинника №17</ListGroup.Item>
                    <ListGroup.Item>Городская поликлинника №5</ListGroup.Item>
                </ListGroup>
                Выбор по организациям
                <ListGroup className="w-25">
                    <ListGroup.Item>Петр"	"Петров"	"Петрович</ListGroup.Item>
                    <ListGroup.Item>Городская поликлинника №5</ListGroup.Item>
                </ListGroup>
            </div>
            </Row>
        </Container>
    );
};

export default Main;