import { createApp } from 'vue'
import { createSSRApp } from 'vue'
import Messages from './components/Messages.vue'
import Message from './components/Message.vue'

export const components = {
    'Messages': Messages,
    'Message': Message,
}

export function ssrComponent(rootComponent, selector, props) {
    Object.keys(props).forEach(function(key,index) {
        rootComponent.props[key].default = props[key]
    })
    const app = createSSRApp(rootComponent)
    app.mount(selector)
}

export function component(rootComponent, selector, props) {
    Object.keys(props).forEach(function(key,index) {
        rootComponent.props[key].default = props[key]
    })
    const app = createApp(rootComponent)
    app.mount(selector)
}
