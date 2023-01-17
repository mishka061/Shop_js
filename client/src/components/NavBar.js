import React, {useContext} from 'react';
//import {Context} from "./index.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils/consts";
//для работы в реальном времени


const NavBar = observer(() => {
    const {user} = useContext(Context)
    //если пользователь авторизован,отображаем первый блок Если нет,то второй
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button variant={"outline-light"} className={"ml-2"}>Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;