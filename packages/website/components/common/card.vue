<template lang='pug'>
.outer
  header(v-if='$slots.header || title')
    slot(name='header')
    span(v-if='title') {{title}}

  .inner(:class="{'is-paddingless': paddingless}")
    slot

  footer(v-if='$slots.footer')
    slot(name='footer')
</template>

<script lang='ts'>
export default {
  props: {
    paddingless: { type: Boolean, required: false },
    title: { type: String, required: false }
  }
}
</script>

<style lang='sass' scoped>
@use '~/assets/stylesheets/pixel-portal'

.outer
  background-color: pixel-portal.$primary-bg-color
  border: 3px solid pixel-portal.$primary-color
  border-radius: 1rem 0 1rem 0
  color: pixel-portal.$primary-color
  display: inline-flex
  flex-direction: column
  overflow: hidden

.inner
  align-items: stretch
  display: flex
  flex-direction: column
  width: 100%

header
  background-color: pixel-portal.$primary-dark-color
  color: pixel-portal.$primary-bg-color
  font-size: 2rem

footer
  .button
    border-radius: 0
    border-left: 0
    border-right: 0
    border-bottom: 0
</style>
