// 组合redux子模块 +导出实例

import {  configureStore } from '@reduxjs/toolkit';
import userRouter from './modules/uers';



const reducer = configureStore({
  
    reducer: {
        user: userRouter,
    }
})
export default reducer;