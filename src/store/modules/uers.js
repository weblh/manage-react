// 和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
// import { request,  getToken as _getToken,
//     setToken as _setToken} from "@/utils";
import {  getToken,
    setToken as _setToken} from "@/utils";
// import { loginAPI } from "@/apis/userAPI";

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: getToken() || null,
        // 用户信息
        userInfo: null,
    },
    reducers: {
        // 同步数据修改方法
        setToken: (state, action) => {
            state.token = action.payload;
            _setToken(action.payload)
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", action.payload);
        },
        // 异步数据修改方法
        // login: (state, action) => {
        //     // 调用登录接口
        //     request.post('/login', action.payload).then(res => {
        //         // 登录成功后，保存token
        //         state.token = res.data.token;
        //         // 保存用户信息
        //         state.userInfo = res.data.userInfo;

        //         // 跳转到首页
        //         navigates('/');
        //     }
        // }
        // }
        // 跳转方法
        // navigate: (state, action) => {
            // const navigates = useNavigate();
            // navigates(state);
        // }
           
    }
    
})
// export const { setToken } = userSlice.actions;
// export default userSlice.reducer;
 const { setToken, setUserInfo } = userSlice.actions;
 const userReducer = userSlice.reducer;

 // 异步方法  完成登录
 const login = (username, password) => {
     return (dispatch) => {
         // 调用登录接口
        //  const res = await loginAPI("/login", { username, password });
         const res = {data:{token:"token",user:"admin"}};
         // 保存token
        dispatch(setToken(res.data.token));
        // 保存用户信息
        dispatch(setUserInfo(res.data.user));
        // 跳转到首页
        
        // navigates("./")

    }
}



export { setToken, login, setUserInfo};

export default userReducer;