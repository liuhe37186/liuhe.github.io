import axios from 'axios';
import qs from 'qs';
// import { delCookie, getCookie, setCookie } from "./cacheManager.js";


//设置超时时间
axios.defaults.timeout = 15000;
//设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
//设置请求baseURL地址
axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
window.baseURL = axios.defaults.baseURL;

//请求拦截器
axios.interceptors.request.use(
    config => {
        console.log("--------interceptors$request$enter--------")
        config.data = qs.stringify(config.data);
        config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'TK_REQUEST_SYS_CODE': 'HISXL',
                // 'TK_REQUEST_AUTH_CODE': 'HISXL-001',
                // 'Accept': 'application/json',
                // 'Accept-Charset': 'utf-8',
                // 'Content-Type': 'application/json;charset=UTF-8',
            }
        console.log("--------interceptors$request$config--------",config,"--------end--------")  
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//添加响应之后拦截器
axios.interceptors.response.use(function(response) {
    //对响应数据做些事
    console.debug("------interceptors$response$response------")
    return response;
}, function(error) {
    //请求错误时做些事
    console.error("------interceptors$response$error------")
    return Promise.reject(error);
});

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    console.error("--------post$url:",url)
    console.debug("-------post$data:",data)
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            console.log("--------post$response-----",response,"-------response$end------")
            resolve(response.data);
        }, error => {
            console.log("--------post$error-----",error,"-------error$end------")
            reject(error)
        })
    })
}