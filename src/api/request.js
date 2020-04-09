import axios from 'axios';
import qs from 'qs';
import { delCookie, getCookie, setCookie } from "./cacheManager.js";


//设置超时时间
axios.defaults.timeout = 15000;
//设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
// axios.defaults.baseURL = 'http://10.87.15.56:8083';
window.xxxUrl = process.env.VUE_APP_UPLOADURL;
// window.xxxUrl = 'http://10.87.21.206:9090/tkzj-upload/api/v1/uploadPic'

window.baseURL = axios.defaults.baseURL;
// console.log(process.env.VUE_APP_CURRENTMODE);
window.loginURL = process.env.VUE_APP_LOGINURL;
window.homeUrl = process.env.VUE_APP_HOMEURL;
window.search = process.env.VUE_APP_SEARCH;


axios.interceptors.request.use(
    config => {
        // const token = "bjs160122000001";
        //qs 系列化参数
        config.data = qs.stringify(config.data);
        config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'TK_REQUEST_SYS_CODE': 'HISXL',
                // 'TK_REQUEST_AUTH_CODE': 'HISXL-001',
                // 'Accept': 'application/json',
                // 'Accept-Charset': 'utf-8',
                // 'Content-Type': 'application/json;charset=UTF-8',
            }
           
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//添加响应之后拦截器
axios.interceptors.response.use(function(response) {
    //对响应数据做些事
    return response;
}, function(error) {
    //请求错误时做些事
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
    //追加全局参数
    data.token = getCookie('apToken');
    data.curUserType = ((getCookie('curUserType') == '5' || getCookie('curUserType') == '6') ? '2' : getCookie('curUserType'));

    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            // 登录超时去重新登录
            if (response.data.code == 2003) {
                // Message.error(response.data.msg);
                setCookie('apToken', '')
                var url = process.env.VUE_APP_LOGINURL + '?callbackUrl=' + encodeURIComponent(process.env.VUE_APP_HOMEURL + 'home')
                window.location.href = url;
            } else if (response.data.code == 2009) {
                // Message.error(response.data.msg);
                setCookie('apToken', '')
                var url = process.env.VUE_APP_LOGINURL + '?callbackUrl=' + encodeURIComponent(process.env.VUE_APP_HOMEURL + 'home')
                window.location.href = url;
            } else if (response.data.code == 2021) {
                // Message.error(response.data.msg);
                resolve(response.data);
                // return;
            } else {
                resolve(response.data);
            }
        }, err => {
            reject(err)
        })
    })
}