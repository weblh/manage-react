import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

// 封装高阶组件
// 核心逻辑： 有token，则携带token请求数据； 没有token，则跳转到登录页面。
export function AuthRoute({ children }) {
    const token = getToken();
    console.log(token);
    if(token) {
        return <>{children}</>;
    }else{
        return <Navigate to="/login" />;
    }
}