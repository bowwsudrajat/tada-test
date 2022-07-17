<template>
  <div
    class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate"
    :class="switchClass"
  >
    <div class="bootstrap-switch-container" @click="triggerToggle()">
      <span class="bootstrap-switch-handle-on ">
        <slot name="on"> {{ onText }} </slot>
      </span>
      <span class="bootstrap-switch-label">
        <b-icon icon="sun-fill" aria-hidden="true"></b-icon>
      </span>
      <span class="bootstrap-switch-handle-off bootstrap-switch-default">
        <slot name="off"> {{ offText }} </slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseSwitch',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: [Array, Boolean],
    // eslint-disable-next-line vue/require-default-prop
    onText: String,
    // eslint-disable-next-line vue/require-default-prop
    offText: String
  },
  computed: {
    switchClass () {
      const base = 'bootstrap-switch-'
      const state = this.model ? 'on' : 'off'
      const classes = base + state
      return classes
    },
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    triggerToggle () {
      this.model = !this.model
    }
  }
}
</script>
<style></style>
