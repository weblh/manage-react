import Home from "@/pages/Home";
import Login from "@/pages/Login";

import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    }
])

export default router;