<template lang='pug'>
.container-casino.is-flex.is-flex-direction-column.is-flex-grow-1
  common-brand-logo.mt-2

  #buttons.is-flex.is-flex-direction-column.is-flex-grow-1
    button.button.is-large(@click.stop.prevent='jumpCasinoPlayer') Gambler
    button.button.is-large.mt-3(@click.stop.prevent='jumpCasinoSpectator') Spectator

  #legal.is-flex.is-flex-direction-column.is-justify-content-center.is-align-items-center.mt-5.mb-2
    span All bets are final. Machines are faulty in the wasteland, players assume all risk.
    span.mt-2 Bankers carry laser pistols.

</template>

<script lang='ts'>

export default {
  computed: {
  },

  mounted () {

  },

  methods: {
    jumpCasino (): void {
      // this.$client.jumpBookmark(this.bookmarkValue);
    },

    jumpCasinoPlayer (): void {
      this.$client.jumpCasinoPlayer();
    },
    jumpCasinoSpectator (): void {
      this.$client.jumpCasinoSpectator();
    }
  }
}
</script>

<style lang='sass' scoped>
@use '~/assets/stylesheets/tombstone'

$max-width: 45rem

.container-casino
  max-width: $max-width
  width: 100%

#buttons
  border-top: 3px solid tombstone.$primary-banker
  padding: 1.5rem .5rem 0 .5rem

#legal
  border-top: 3px solid tombstone.$primary-banker
  color: #FFFFFF
  font-family: 'Enter Command'
  font-size: 1.25rem
  line-height: 1rem
  padding: .5rem

</style>
