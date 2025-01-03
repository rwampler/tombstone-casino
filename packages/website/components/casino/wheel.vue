<template lang='pug'>
.container-casino.is-flex.is-flex-direction-column.is-flex-grow-1
  common-brand-logo.mt-2

  #wheel.is-flex.is-flex-direction-column.is-align-items-center.is-flex-grow-1
    .status.mb-2
      template(v-if='nextSpinSeconds <= 0') Best of luck!
      template(v-else-if='nextSpinSeconds < 10') Last call to place bets!
      template(v-else) Place your bets!

    .wheel.is-flex-grow-1

    .timer.mt-2
      span Next Spin:
      span.ml-2
        template(v-if='nextSpinSeconds <= 0') in-progress
        template(v-else-if='nextSpinSeconds < 2') {{ nextSpinSeconds }} second
        template(v-else) {{ nextSpinSeconds }} seconds

  #info.is-flex.is-flex-direction-column.mt-2
    div
      span Bankers:
      span.info-value.ml-2 Lee Rockton

    .is-flex.is-flex-direction-row
      .is-flex.is-flex-direction-column
        .balance
          span Balance:
          span.info-value.ml-2 {{ $formatMoney(balance) }}

        .info-tooltip Visit a Lee's Golden banker for credit or to cap out

      .is-flex.is-flex-direction-column.ml-5
        div.info-count
          span Spectators:
          span.info-value.ml-2 {{ spectatorCount }}

        div.info-count
          span Gamblers:
          span.info-value.ml-2 {{ gamblerCount }}

    .buttons.has-addons.is-flex.mt-4
      button.button.is-small.is-reduced-right-padding.is-paramour.is-flex-grow-1(@click.stop.prevent='betParamour' :disabled='!canMakeBet' :class="{ 'is-active': isBetParamour }")
        | Paramour
        .bet-token.ml-1
          .bet-icon.logo-primer-cap(v-show='isBetParamour')
      button.button.is-small.is-reduced-right-padding.is-mirage.is-flex-grow-1(@click.stop.prevent='betMirage' :disabled='!canMakeBet' :class="{ 'is-active': isBetMirage }")
        | Mirage
        .bet-token.ml-1
          .bet-icon.logo-primer-cap(v-show='isBetMirage')
      button.button.is-small.is-reduced-right-padding.is-shooter.is-flex-grow-1(@click.stop.prevent='betShooter' :disabled='!canMakeBet' :class="{ 'is-active': isBetShooter }")
        | Shooter
        .bet-token.ml-1
          .bet-icon.logo-primer-cap(v-show='isBetShooter')

    .buttons.has-addons.is-flex.mt-1
      button.button.is-normal.is-reduced-right-padding.is-tan.is-flex-grow-1(@click.stop.prevent='betAmount1' :disabled='!canMakeBet' :class="{ 'is-active': isBetAmount1 }")
        | $1
        .bet-token.ml-1
          .bet-icon.logo-primer-cap(v-show='isBetAmount1')
      button.button.is-normal.is-reduced-right-padding.is-tan.is-flex-grow-1(@click.stop.prevent='betAmount5' :disabled='!canMakeBet' :class="{ 'is-active': isBetAmount5 }")
        | $5
        .bet-token.ml-1
          .bet-icon.logo-primer-cap(v-show='isBetAmount5')
      button.button.is-normal.is-reduced-right-padding.is-tan.is-flex-grow-1(@click.stop.prevent='betAmount25' :disabled='!canMakeBet' :class="{ 'is-active': isBetAmount25 }")
        | $25
        .bet-token.ml-1
          .bet-icon.logo-primer-cap(v-show='isBetAmount25')
      button.button.is-normal.is-reduced-right-padding.is-tan.is-flex-grow-1(@click.stop.prevent='betAmount100' :disabled='!canMakeBet' :class="{ 'is-active': isBetAmount100 }")
        | $100
        .bet-token.ml-1
          .bet-icon.logo-primer-cap(v-show='isBetAmount100')

    .is-flex.mt-3
      button.button.is-large.is-flex-grow-1(:disabled='!canPlaceBet') Place Bet

  #legal.is-flex.is-flex-direction-column.is-justify-content-center.is-align-items-center.mb-2
    span All bets are final. Machines are faulty in the wasteland, players assume all risk.
    span.mt-2 Bankers carry laser pistols.

</template>

<script lang='ts'>
import { WheelColor } from '~/plugins/tombstone/state/client-state';

export default {
  computed: {
    nextSpinSeconds (): number {
      return Math.max(0, 40);
    },

    balance (): number {
      return 0;
    },

    spectatorCount (): number {
      return 0;
    },
    gamblerCount (): number {
      return 0;
    },

    isBetParamour (): boolean {
      return this.$state.wheelBetColor === WheelColor.PARAMOUR;
    },
    isBetMirage (): boolean {
      return this.$state.wheelBetColor === WheelColor.MIRAGE;
    },
    isBetShooter (): boolean {
      return this.$state.wheelBetColor === WheelColor.SHOOTER;
    },

    isBetAmount1 (): boolean {
      return this.$state.wheelBetAmount === 1;
    },
    isBetAmount5 (): boolean {
      return this.$state.wheelBetAmount === 5;
    },
    isBetAmount25 (): boolean {
      return this.$state.wheelBetAmount === 25;
    },
    isBetAmount100 (): boolean {
      return this.$state.wheelBetAmount === 100;
    },

    canMakeBet (): boolean {
      return this.$state.rolePlayer;
    },
    canPlaceBet (): boolean {
      return this.$state.rolePlayer && this.$state.wheelBetColor !== undefined && this.$state.wheelBetAmount > 0;
    }
  },

  methods: {
    makeBetColor (type: WheelColor): void {
      if (!this.canMakeBet) {
        return;
      }

      if (this.$state.wheelBetColor === type) {
        this.$state.wheelBetColor = undefined;
      }
      else {
        this.$state.wheelBetColor = type;
      }
    },
    makeBetAmount (amount: number): void {
      if (!this.canMakeBet) {
        return;
      }

      if (this.$state.wheelBetAmount === amount) {
        this.$state.wheelBetAmount = 0;
      }
      else {
        this.$state.wheelBetAmount = amount;
      }
    },

    betParamour (): void {
      this.makeBetColor(WheelColor.PARAMOUR);
    },
    betMirage (): void {
      this.makeBetColor(WheelColor.MIRAGE);
    },
    betShooter (): void {
      this.makeBetColor(WheelColor.SHOOTER);
    },

    betAmount1 (): void {
      this.makeBetAmount(1);
    },
    betAmount5 (): void {
      this.makeBetAmount(5);
    },
    betAmount25 (): void {
      this.makeBetAmount(25);
    },
    betAmount100 (): void {
      this.makeBetAmount(100);
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


#wheel
  border-top: 3px solid tombstone.$primary-banker

  .status
    color: #FFFFFF
    font-family: 'Enter Command'
    font-size: 3rem
    line-height: 3rem

  .timer
    color: #FFFFFF
    font-family: 'Enter Command'
    font-size: 2rem
    line-height: 2rem

  .wheel
    aspect-ratio: 1
    border: 1px solid tombstone.$primary-banker

#info
  border-top: 3px solid tombstone.$primary-banker
  color: #FFFFFF
  font-family: 'Enter Command'
  font-size: 2rem
  line-height: 2rem
  padding: 0 .5rem .5rem .5rem

  .info-value
    color: tombstone.$primary-banker

  .info-count
    font-size: 1.5rem
    line-height: 1.5rem

  .balance
    font-size: 2.5rem
    line-height: 2rem

  .info-tooltip
    font-size: 1.25rem
    line-height: 1rem

  .bet-token
    height: 1.5rem
    width: 1.5rem

    .bet-icon
      height: 1.5rem
      width: 1.5rem
      background-size: 1.5rem

#legal
  border-top: 3px solid tombstone.$primary-banker
  color: #FFFFFF
  font-family: 'Enter Command'
  font-size: 1.25rem
  line-height: 1rem
  padding: .5rem

</style>
