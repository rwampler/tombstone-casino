<template lang='pug'>
#container-main.is-flex.is-justify-content-center

  .is-flex.is-flex-direction-column.is-align-items-center
    template(v-if='isLoading')
      .is-flex-grow-1
      #loading-logo.logo-primer-cap.logo-spin
      .is-flex-grow-3

    template(v-else)
      template(v-if='isCasinoLobby')
        casino-lobby

      template(v-else-if='isCasinoWheel')
        casino-wheel

      template(v-else)
        .is-flex-grow-1
        menu-title
        .is-flex-grow-3

</template>

<script lang='ts'>
import { MenuType } from '~/plugins/tombstone/state/client-state';

export default {
  computed: {
    // isError (): boolean {
    //   return false;//this.$state.connection.socketError;
    // },
    isLoading (): boolean {
      return !this.$state.hasFonts;
    },

    isCasinoLobby (): boolean {
      return this.$state.currentMenu == MenuType.CASINO_LOBBY;
    },
    isCasinoLogin (): boolean {
      return this.$state.currentMenu == MenuType.CASINO_LOGIN;
    },
    isCasinoEnroll (): boolean {
      return this.$state.currentMenu == MenuType.CASINO_ENROLL;
    },

    isCasinoWheel (): boolean {
      return this.$state.currentMenu == MenuType.CASINO_WHEEL;
    }
    // showTitle (): boolean {
    //   return !this.$state.inputs.controlsLocked;
    // }
  },

  mounted () {
    if (this.$client) {
      this.$client.start();//.then(() => requestAnimationFrame((time) => this.animate(time)));
    }
  },

  methods: {
    // animate (time: number) {
    //   this.$client?.tick(time);
    //   requestAnimationFrame((time: number) => this.animate(time));
    // }
  }
}
</script>


<style lang='sass' scoped>
@use '~/assets/stylesheets/tombstone'

#container-main
  height: 100%
  width: 100%

#loading-logo
  background-size: 4rem
  height: 4rem
  width: 4rem

</style>
