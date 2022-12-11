import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Hero from "../../Pages/Hero/Hero";
import Blog from "../../Pages/Template/Blog";
import Template from "../../Pages/Template/Template";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Template></Template>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);

export default routes;