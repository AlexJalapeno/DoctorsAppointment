import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const ServiceBar = observer(() => {
    const {service} = useContext(Context)
    return (
        <div>
            <ListGroup>
                {service.map(type =>
                    <ListGroup.Item key = {service.id}>
                        {service.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default ServiceBar;