export const BaseSwitch = () => import('../..\\components\\BaseSwitch.vue' /* webpackChunkName: "components/base-switch" */).then(c => wrapFunctional(c.default || c))
export const Invoice = () => import('../..\\components\\Invoice.vue' /* webpackChunkName: "components/invoice" */).then(c => wrapFunctional(c.default || c))
export const InvoiceModal = () => import('../..\\components\\InvoiceModal.vue' /* webpackChunkName: "components/invoice-modal" */).then(c => wrapFunctional(c.default || c))
export const Loading = () => import('../..\\components\\Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const LayoutSidebarNav = () => import('../..\\components\\Layout\\SidebarNav.vue' /* webpackChunkName: "components/layout-sidebar-nav" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
