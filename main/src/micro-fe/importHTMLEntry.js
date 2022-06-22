
import { fetchResource } from './utils'
export const importHTMLEntry = async (entry) => {
    // 根据一个html ，1.获取html里所有的script 2.获取css样式  3.template

    const html = await fetch(entry).then(res => res.text())
    const template = document.createElement('div');
    // 浏览器出于安全考虑，js脚本不会加载执行
    template.innerHTML = html  // innerHTML可以使字符串转化为dom节点
    const scripts = template.querySelectorAll('script')

    // 获取所有的script标签代码
    async function getExternalScript() {
        return Promise.all(Array.from(scripts).map(script => {
            const src = script.getAttribute('src');
            if (!src) {
                // 非js引入的脚本
                return Promise.resolve(script.innerHTML)
            } else {
                return fetchResource(src.startsWith('http') ? src : `${entry}/${src}`)
            }
        }))
    }

    // 手动加载子应用的script并加载
    async function execScripts() {
        const scripts = await getExternalScript();
        // 手动构造一个commonjs模块环境
        const module = { exports: {} };
        const exports = module.exports
        scripts.forEach(code => eval(code))

        return module.exports
    }
    return { template, execScripts, getExternalScript }
}