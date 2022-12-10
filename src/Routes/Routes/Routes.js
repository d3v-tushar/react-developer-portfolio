import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Hero from "../../Pages/Hero/Hero";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Hero></Hero>
            }
        ]
    }
]);

export default routes;