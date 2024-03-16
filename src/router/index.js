import Home from "@/pages/Home";
import Login from "@/pages/Login";
import { AuthRoute } from "@/components/AuthRoute";

import { createBrowserRouter} from "react-router-dom";
import { Suspense , lazy} from "react";
// import Article from "@/pages/Article";
// import Publish from "@/pages/Publish";

// 1\lazy函数进行导入

const Article = lazy(() => import("@/pages/Article"));
const Publish = lazy(() => import("@/pages/Publish"));
// 2\ Suspense  配置渲染还未完成时展示的内容
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Home /></AuthRoute> ,
        children: [
            {
                path: "article",
                element: <Suspense fallback={"加载中"} ><Article /></Suspense> ,
            },
            {
                path: "publish",
                element: <Suspense fallback={"加载中"} ><Publish /></Suspense>,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    }
])

export default router;