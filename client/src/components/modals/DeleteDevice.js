import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown} from "react-bootstrap";
import {Context} from "../../index";


const DeleteDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brend =>
                            <Dropdown.Item key={brend.id}>{brend.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Выберите название устройства</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brend =>
                            <Dropdown.Item key={brend.name}>{brend.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Button
                    variant="outline-success">Удалить
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    )
};
export default DeleteDevice;
