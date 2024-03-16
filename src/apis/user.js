import { request } from "@/utils";
// 1。登录请求
export function loginAPI(params) {
    return request({
        url: "/login",
        method: "POST",
        data: params,
    })
}