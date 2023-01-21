import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";//для работы в реальном времени
import {Context} from "../index";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";


//если пользователь авторизован,отображаем первый блок Если нет,то второй

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()


    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}} >
                        <Button variant={"outline-light"}
                                onClick={() => history.push(REGISTRATION_ROUTE)}
                        >
                            Зарегистрироваться
                        </Button>
                        <Button variant={"outline-light"}
                                onClick={() => history.push(LOGIN_ROUTE)}
                                className="ml-2"
                        >Войти
                        </Button>
                    </Nav>
                }
            </Container>
            <Button variant={"outline-light"}
                    onClick={() => history.push(BASKET_ROUTE)}
                    className="ml-2"
            >Корзина
            </Button>
        </Navbar>
    );
});

export default NavBar;

