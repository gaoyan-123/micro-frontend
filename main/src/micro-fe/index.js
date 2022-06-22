import { handleRoute } from './handleRoute';
import { rewiteRoute } from './rewiteRoute'

let _apps = [];
export const getAppsList = () => _apps;
export const registerMicroApps = (apps) => {
     // 注册微应用列表
    _apps = apps
}

export const start = () => {
    // 原理
    // 监听路由变化  匹配子应用  加载子应用  渲染子应用
    rewiteRoute()
    handleRoute() // 初始执行匹配
}

