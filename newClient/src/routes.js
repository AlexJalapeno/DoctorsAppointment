import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    APPOINTMENT_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
    STATISTICS_ROUTE
} from "./utils/consts";
import Appointment from "./pages/Appointment";
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: APPOINTMENT_ROUTE,
        Component: Appointment
    },
    {
        path: STATISTICS_ROUTE,
        Component: Statistics
    }
]
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: APPOINTMENT_ROUTE + '/:id',
        Component: Appointment
    },
    //Пока нет рутов
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: APPOINTMENT_ROUTE,
        Component: Appointment
    },
    {
        path: STATISTICS_ROUTE,
        Component: Statistics
    }
]