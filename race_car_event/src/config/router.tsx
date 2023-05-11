import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ListRaces from "../pages/Races/ListRaces";
import MapRaces from "../pages/Races/MapRaces";

export const Router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/races",
                    children: [
                        {
                            path: "/races",
                            element: <ListRaces />,
                        },
                        {
                            path: "/races/map",
                            element: <MapRaces />,
                        },
                    ],
                }
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        }
]);

export default Router;