export { default as BaseSwitch } from '../..\\components\\BaseSwitch.vue'
export { default as Invoice } from '../..\\components\\Invoice.vue'
export { default as InvoiceModal } from '../..\\components\\InvoiceModal.vue'
export { default as Loading } from '../..\\components\\Loading.vue'
export { default as Modal } from '../..\\components\\Modal.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as LayoutSidebarNav } from '../..\\components\\Layout\\SidebarNav.vue'

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
