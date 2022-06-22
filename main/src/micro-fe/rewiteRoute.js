import { handleRoute } from './handleRoute'

let prevRoute = ''
let nextRoute = ''
export const getPrevRoute = () => prevRoute

export const getNextRoute = () => nextRoute

export const rewiteRoute = () => {
    window.addEventListener('popstate', () => {
        // hash路由   hashChange
        // history路由  pushState,replaceState/ 
        // history.back(),history.go(),history.forword
        // 往原来的监听时间追加，直接改写会影响原来的popState
        prevRoute = nextRoute
        nextRoute = window.location.pathname
        handleRoute()
    })

    const rawPushState = window.history.pushState
    window.history.pushState = (...args) => {
        // 添加历史记录
        prevRoute = window.location.pathname
        rawPushState.apply(window.history, args)
        nextRoute = window.location.pathname
        handleRoute()
    }

    const rawReplaceState = window.history.replaceState
    window.history.replaceState = (...args) => {
        // 替换历史记录
        prevRoute = window.location.pathname
        rawReplaceState.apply(window.history, args)
        nextRoute = window.location.pathname
        handleRoute()
    }
}