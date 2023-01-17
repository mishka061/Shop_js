//список маршрутов,на которые может перейти авторизованный пользователь
import Admin from "./page/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./page/Basket";
import Shop from "./page/Shop";
import Auth from "./page/Auth";
import DevicePage from "./page/DevicePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE ,//путь страницы
        Component: Admin //сама страница
    },
    {
        path: BASKET_ROUTE ,
        Component: Basket
    }
]
//список маршрутов,на которые может перейти любой пользователь

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE ,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE ,
        Component: Auth
    },
    {
        path:DEVICE_ROUTE + '/:id' ,
        Component: DevicePage
    }

]