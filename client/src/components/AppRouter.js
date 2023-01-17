import React, {useContext} from "react";
import {Switch, Route, Redirect,} from "react-router-dom";

//import {authRoutes, publicRoutes} from "./routes";
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils/consts";
import {publicRoutes, authRoutes} from "../routes";
import {observer} from "mobx-react-lite";


//указываем несколько маршрутов,если ни один из маршрутов не отработает,
// то отработает самый последний ,который указан в Switch
//импортируем массив с роутерами,который доступен только авторизованным пользователям
// делаем проверку, если пользователь авторизован,вытаскиваем путь и компонент
//ключ exact говорит о том что путь должен точно совпадать
//для публичных(не авторизованных) пользователей,все равно роутеры создаем

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;