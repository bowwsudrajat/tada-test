<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="logo">
        <img src="../../assets/img/logo.png" alt="app-logo">
      </div>
      <div class="sidebar-item-bottom">
        <div class="wrapper_toggle">
          <div class="togglebutton switch-change-color mt-3">
            <BaseSwitch v-model="darkMode" @input="toggleMode" />
          </div>
        </div>
        <hr>
        <div class="profpict">
          <img src="../../assets/img/7.jpg" class="profpict">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSwitch from '../../components/BaseSwitch.vue'
export default {
  name: 'SidebarNav',
  components: {
    BaseSwitch
  },
  data () {
    return {
      darkMode: true
    }
  },
  methods: {
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
