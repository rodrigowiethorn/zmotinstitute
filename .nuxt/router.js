import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7fdea49c = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7754b74c = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _08ee27fe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _359a1c46 = () => interopDefault(import('..\\pages\\lectures-events.vue' /* webpackChunkName: "pages/lectures-events" */))
const _e89fc27c = () => interopDefault(import('..\\pages\\online-courses.vue' /* webpackChunkName: "pages/online-courses" */))
const _62fe7a98 = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _587e9eac = () => interopDefault(import('..\\pages\\zmot-audit.vue' /* webpackChunkName: "pages/zmot-audit" */))
const _7e280354 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _235c5b0b = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _7fdea49c,
    name: "blog___en"
  }, {
    path: "/contact",
    component: _7754b74c,
    name: "contact___en"
  }, {
    path: "/es",
    component: _08ee27fe,
    name: "index___es"
  }, {
    path: "/lectures-events",
    component: _359a1c46,
    name: "lectures-events___en"
  }, {
    path: "/online-courses",
    component: _e89fc27c,
    name: "online-courses___en"
  }, {
    path: "/privacy",
    component: _62fe7a98,
    name: "privacy___en"
  }, {
    path: "/pt-br",
    component: _08ee27fe,
    name: "index___pt-br"
  }, {
    path: "/zmot-audit",
    component: _587e9eac,
    name: "zmot-audit___en"
  }, {
    path: "/es/auditoria-zmot",
    component: _587e9eac,
    name: "zmot-audit___es"
  }, {
    path: "/es/blog",
    component: _7fdea49c,
    name: "blog___es"
  }, {
    path: "/es/conferencias-eventos",
    component: _359a1c46,
    name: "lectures-events___es"
  }, {
    path: "/es/contact",
    component: _7754b74c,
    name: "contact___es"
  }, {
    path: "/es/cursos-online",
    component: _e89fc27c,
    name: "online-courses___es"
  }, {
    path: "/es/privacidad",
    component: _62fe7a98,
    name: "privacy___es"
  }, {
    path: "/pt-br/auditoria-zmot",
    component: _587e9eac,
    name: "zmot-audit___pt-br"
  }, {
    path: "/pt-br/blog",
    component: _7fdea49c,
    name: "blog___pt-br"
  }, {
    path: "/pt-br/contact",
    component: _7754b74c,
    name: "contact___pt-br"
  }, {
    path: "/pt-br/cursos-online",
    component: _e89fc27c,
    name: "online-courses___pt-br"
  }, {
    path: "/pt-br/palestras-eventos",
    component: _359a1c46,
    name: "lectures-events___pt-br"
  }, {
    path: "/pt-br/privacidade",
    component: _62fe7a98,
    name: "privacy___pt-br"
  }, {
    path: "/es/blog/:slug",
    component: _7e280354,
    name: "blog-slug___es"
  }, {
    path: "/pt-br/blog/:slug",
    component: _7e280354,
    name: "blog-slug___pt-br"
  }, {
    path: "/blog/:slug",
    component: _7e280354,
    name: "blog-slug___en"
  }, {
    path: "/es/*",
    component: _235c5b0b,
    name: "all___es"
  }, {
    path: "/pt-br/*",
    component: _235c5b0b,
    name: "all___pt-br"
  }, {
    path: "/",
    component: _08ee27fe,
    name: "index___en"
  }, {
    path: "/*",
    component: _235c5b0b,
    name: "all___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
