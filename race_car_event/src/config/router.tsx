import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import { MainLayout } from "../components/layout/MainLayout";

export const Router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        }
]);

export default Router;