// 和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: null,
        // 用户信息
        userInfo: null,
    },
    reducers: {
        // 同步数据修改方法
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        }
    }
    
})
// export const { setToken } = userSlice.actions;
// export default userSlice.reducer;
 const { setToken, setUserInfo } = userSlice.actions;
 const userReducer = userSlice.reducer;

// 异步方法  完成登录
const login = (username, password) => {
    return async (dispatch) => {
        // 调用登录接口
        const res = await request.post("/login", { username, password });
        // 保存token
        dispatch(setToken(res.data.token));
        // 保存用户信息
        dispatch(setUserInfo(res.data.user));
        // 跳转到首页
        // history.push("/");

    }
}



export { setToken, login, setUserInfo};

export default userReducer;