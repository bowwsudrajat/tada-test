<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="invoicesLoaded">
    <div class="navtop">
      <div class="logo left">
        <img src="../assets/img/logo.png" alt="app-logo">
      </div>
      <div class="action_right right flex">
        <div class="wrapper_toggle">
          <div class="togglebutton switch-change-color">
            <BaseSwitch v-model="darkMode" @input="toggleMode" />
          </div>
        </div>
        <hr>
        <div class="profpict">
          <img src="../assets/img/7.jpg" class="img-profpict">
        </div>
      </div>
    </div>
    <div class="app flex flex-column">
      <SidebarNav />

      <div class="app-content flex flex-column">
        <Modal v-if="modalActive" />
        <transition name="invoice">
          <InvoiceModal v-if="invoiceModal" />
        </transition>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import SidebarNav from '../components/Layout/SidebarNav.vue'
import BaseSwitch from '../components/BaseSwitch.vue'

export default {
  components: {
    SidebarNav,
    BaseSwitch
  },
  data () {
    return {
      darkMode: true
    }
  },
  computed: {
    ...mapState(['invoiceModal', 'modalActive', 'invoicesLoaded'])
  },
  methods: {
    ...mapActions(['GET_INVOICES']),
    toggleMode (type) {
      const docClasses = document.body.classList
      if (type) {
        docClasses.remove('white-content')
      } else {
        docClasses.add('white-content')
      }
    }
  }
}
</script>
