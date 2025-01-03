import _ from 'lodash';
import { reactive } from 'vue';

import Client from './tombstone/client';
import ClientState from './tombstone/state/client-state';


export default defineNuxtPlugin((nuxtApp) => {
  //, nuxtApp.$config.public.disableRightClick ?? true, nuxtApp.$config.public.CLIENT_VERSION ?? '0.0.0'
  const state: ClientState = reactive(new ClientState());
  const client: Client = new Client(state);

  return {
    provide: {
      state: state,
      client: client,

      formatMoney: (value: number | string | undefined | null) => _.isNumber(value) ? `$${Math.round(value).toLocaleString()}` : '',

      debounce: (waitMs: number, callback: (...args : any[]) => any): any => {
        return _.debounce(callback, waitMs, { leading: true, trailing: true });
      }
    }
  };
});
