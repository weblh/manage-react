//axios 的封装

// 1、根域名配置
// 2、超时时间
// 3、请求拦截
// 4、响应拦截
// 5、错误统一处理
// 6、封装get/post/put/delete等方法

// 7、支持form-data格式
// 8、支持文件上传下载
// 9、支持取消请求
// 10、支持请求配置的合并
// 11、支持自定义配置
// 12、支持请求数据自动序列化
// 13、支持响应数据自动反序列化
// 14、支持请求/响应数据转换
// 15、支持请求/响应数据格式化
// 16、支持请求/响应数据压缩
// 17、支持请求/响应数据加密
// 18、支持请求/响应数据解密



import axios from 'axios';
import { getToken } from '@/utils/index';
// import qs from 'qs'; // 用于请求数据自动序列化  
  
// 1. 根域名配置  
const BASE_URL = 'https://api.example.com';  
  
// 2. 超时时间  
const TIMEOUT = 5000;  
  
// 创建 Axios 实例  
const instance = axios.create({  
  baseURL: BASE_URL,  
  timeout: TIMEOUT
  // 其他配置...  
});  
  
// 3. 请求拦截  
instance.interceptors.request.use(  
  config => {  
    // 在发送请求之前做些什么  
    // 例如，添加请求头、设置 token 等  
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;  
  },  
  error => {  
    // 对请求错误做些什么  
    return Promise.reject(error);  
  }  
);  
  
// 4. 响应拦截  
instance.interceptors.response.use(  
  response => {  
    // 对响应数据做点什么  
    // 例如，自动反序列化、处理错误状态码等  
    return response.data;  
  },  
  error => {  
    // 对响应错误做点什么  
    return Promise.reject(error);  
  }  
);  
  
// 5. 封装 get/post/put/delete 等方法  
const request = {  
  get: (url, params) => instance.get(url, { params }),  
//   post: (url, data) => instance.post(url, qs.stringify(data)), // 使用 qs 序列化数据  
//   put: (url, data) => instance.put(url, qs.stringify(data)),  
  post: (url, data) => instance.post(url, data), // 使用 qs 序列化数据  
  put: (url, data) => instance.put(url, data),  
  delete: url => instance.delete(url),  
  // 其他方法...  
};  
  
export { request };
 
// import axios from 'axios';  
// import CryptoJS from 'crypto-js'; // 用于数据加密
// // 创建 Axios 实例  
// const instance = axios.create({  
//   // 其他配置...
// });
// // 请求拦截器
// instance.interceptors.request.use(config => {
//   // 在发送请求之前做些什么
//   // 例如，添加请求头、设置 token 等
//   // 假设需要对请求数据进行加密处理
//   if (config.data) {
      
//     // 假设加密方式为 CryptoJS.AES.encrypt
//     const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(config.data), 'secret key').toString();
//     config.data = encryptedData;

//     // 假设需要对请求头进行加密处理
//     const encryptedHeaders = CryptoJS.AES.encrypt(JSON.stringify(config.headers), 'secret key').toString();

//     // 更新请求头
//     config.headers = JSON.parse(encryptedHeaders);



//   }
//   return config;
// }, error =>{
//   // 对请求错误做些什么
//   return Promise.reject(error);
// }
// );



  