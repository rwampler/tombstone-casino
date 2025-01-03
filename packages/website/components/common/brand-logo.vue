<template lang='pug'>
.is-flex.is-flex-direction-column.is-align-items-center
  a#title.is-inline-flex.is-flex-direction-row.is-align-items-flex-end.is-justify-content-center(href='/')
    span.head L
    span.body EE'S
    span.head.ml-4 G
    span.body OLDEN

  #sub-title.sub-title.is-inline-flex.is-justify-content-center
    span Boias Fairest Casino

</template>

<style lang='sass' scoped>
@use '~/assets/stylesheets/tombstone'

$max-width: 45rem

#title
  border-radius: 1rem
  color: tombstone.$primary-banker
  font-family: 'Carnevalee Freakshow'

  .head
    font-size: 4.5rem
    line-height: 4rem

  .body
    border-top: 3px solid tombstone.$primary-banker
    border-bottom: 3px solid tombstone.$primary-banker
    display: inline-block
    font-size: 3rem
    line-height: 2.5rem
    letter-spacing: .2rem
    padding-bottom: .5rem

#sub-title
  color: tombstone.$primary-banker
  font-family: 'Enter Command'
  font-size: 2rem

</style>
