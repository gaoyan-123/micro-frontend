import { getAppsList } from "."
import { importHTMLEntry } from './importHTMLEntry'
import { getPrevRoute, getNextRoute } from "./rewiteRoute"

export const handleRoute = async () => {
    // 匹配子应用
    // 2.去_apps列表的activeRule查找匹配上的路由
    const apps = getAppsList()

    const prevApp = apps.find(item => getPrevRoute().startsWith(item.activeRule))

    const app = apps.find(_apps => getNextRoute().startsWith(_apps?.activeRule))
    if (!app) {
        // 未匹配到路由
        return
    }

    if (prevApp) {
        // 如果有上一个应用
        unmount(prevApp)
    }
    // 加载子应用
    const container = document.querySelector(app.container)
    const { template, execScripts, getExternalScript } = await importHTMLEntry(app.entry)
    container.appendChild(template);
    // 渲染子应用

    // 配置全局变量__POWERED_BY_QIANKUN__
    window.__POWERED_BY_QIANKUN__ = true
    const appExports = await execScripts()
    app.bootstrap = appExports.bootstrap
    app.mount = appExports.mount
    app.unmount = appExports.unmount
    console.log(app)

    await bootstrap(app)
    await mount(app)
}

async function bootstrap(app) {
    app?.bootstrap?.()
}

async function mount(app) {
    app?.mount?.({ container: document.querySelector(app.container) })
}

async function unmount(app) {
    app?.unmount?.({ container: document.querySelector(app.container) })
}