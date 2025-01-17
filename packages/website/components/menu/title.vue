<template lang='pug'>
.title-container
  common-brand-logo#brand

  #quote.mt-3.is-flex.is-flex-direction-row.is-align-items-center
    span.is-flex-grow-1
      .body.mt-3 Welcome, and please enjoy your stay!
      .body.mt-3 At Lee's Golden, we offer the finest games of chance in the Boia wasteland. Spin the wheel, roll the dice, and strike it rich!
      .author.my-2 Lee Rockton, Proprietor
    span.avatar
      img(src='~/assets/images/avatar.png')

  #buttons.is-flex.is-flex-direction-column.mt-5
    button.button.is-large(@click.stop.prevent='jumpCasino') Casino
    a.button.is-large.mt-3(disabled) Office

  #legal.is-flex.is-flex-direction-column.mt-5.mb-2
    .is-flex.is-flex-direction-row.is-align-items-center
      a(href='https://www.tombstonemmo.com/' target='_blank')
        img(src='~/assets/images/tombstone-mmo-logo.png')
      .is-flex-grow-1.ml-4
        a.is-underlined(href='https://github.com/rwampler/tombstone-casino' target='_blank') Fan-made website
        span.with-padding for the western-futuristic open world MMORPG
        a.is-underlined(href='https://www.tombstonemmo.com/' target='_blank') Tombstone MMO

    #other-fansites.is-flex.is-flex-direction-row.is-flex-wrap-wrap.is-justify-content-center.is-align-items-center.mt-4
      span Other fan-sites:
      .icon-separator.logo-primer-cap.mx-1.mt-1
      a.is-underlined(href='https://tombstonecalculators.com/' target='_blank') Tombstone Calculators
      .icon-separator.logo-primer-cap.mx-1.mt-1
      a.is-underlined(href='https://gamingwithdaopa.ellatha.com/tombstone-mmo/map/' target='_blank') DaOpa's Interactive Map
      .icon-separator.logo-primer-cap.mx-1.mt-1
      a.is-underlined(href='https://tombstonemmowiki.org/' target='_blank') Tombstone Wiki
      .icon-separator.logo-primer-cap.ml-1.mt-1

    #license.has-text-centered.mt-4
      | Source code licensed
      a.is-underlined.ml-1(href='https://opensource.org/licenses/mit-license.php' target='_blank') MIT
      |. Website content licensed
      a.is-underlined.ml-1(href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank') CC BY-NC-SA 4.0

</template>

<script lang='ts'>


interface TitleData {
}

export default {
  data (): TitleData {
    return {
    };
  },

  computed: {
    clientVersion (): string {
      return this.$config.public.CLIENT_VERSION ?? 'v0.0.0-0000-00-00';
    },
  },

  methods: {
    jumpCasino (): void {
      this.$client.jumpCasino();
    },

    jumpOffice (): void {
      // this.$client.jumpBookmark(this.bookmarkValue);
    }
  }
}
</script>

<style lang='sass' scoped>
@use 'bulma/sass/utilities/mixins'
@use '~/assets/stylesheets/tombstone'

$max-width: 45rem

.title-container
  max-width: $max-width
  width: 100%

#quote
  border-bottom: 3px solid tombstone.$primary-banker
  border-top: 3px solid tombstone.$primary-banker
  color: #FFFFFF
  padding: 1rem

  .body
    font-family: 'Enter Command'
    font-size: 1.5rem
    line-height: 1.5rem

  .author
    font-family: 'Enter Command Italic'
    font-size: 1.5rem

  .avatar
    padding-left: 1rem

    img
      width: 10rem

#buttons
  padding: 0 .5rem

#legal
  border-top: 3px solid tombstone.$primary-banker
  color: #FFFFFF
  font-family: 'Enter Command'
  font-size: 1.5rem
  line-height: 1.25rem
  padding: 1rem 1rem 0 1rem

  #license
    font-size: 1rem

  .with-padding
    padding: 0 .5rem

  .icon-separator
    background-size: 1rem
    height: 1rem
    width: 1rem

  @include mixins.until(380px)
    font-size: 1.25rem
    line-height: 1rem

    #other-fansites
      display: none !important

    .with-padding
      padding: 0 .25rem

  a
    white-space: nowrap

  img
    max-width: 8rem

</style>
