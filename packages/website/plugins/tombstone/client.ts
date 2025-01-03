import AssetLoader from "./assets/asset-loader";
import type ClientState from "./state/client-state";
import { MenuType } from "./state/client-state";


export default class Client {
  state: ClientState;

  loader: AssetLoader;

  constructor (state: ClientState) {
    this.state = state;

    this.loader = new AssetLoader(state);
  }

  async start (): Promise<void> {
    await this.loader.load();

    // this.renderer.initialize();
    // this.manager.initialize();
    // this.state.renderer.running = true;
  }

  jumpCasino (): void {
    this.state.currentMenu = MenuType.CASINO_LOBBY;
  }

  jumpCasinoPlayer (): void {
    this.state.rolePlayer = true;
    this.state.currentMenu = MenuType.CASINO_WHEEL;
  }
  jumpCasinoSpectator (): void {
    this.state.roleSpectator = true;
    this.state.currentMenu = MenuType.CASINO_WHEEL;
  }

  tick (time: number) {
    // this.renderer.tick(time);
    // this.state.renderer.lastTick = time;
  }
}
