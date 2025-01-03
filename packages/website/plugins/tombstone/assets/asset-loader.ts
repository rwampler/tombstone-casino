import type ClientState from "../state/client-state";
import FontLoader from "./font-loader";

const FONTS = [
  {
    url: '/fonts/EnterCommand.ttf',
    name: 'Enter Command'
  },
  {
    url: '/fonts/EnterCommand-Bold.ttf',
    name: 'Enter Command Bold'
  },
  {
    url: '/fonts/EnterCommand-Italic.ttf',
    name: 'Enter Command Italic'
  },
  {
    url: '/fonts/CarnevaleeFreakshow.ttf',
    name: 'Carnevalee Freakshow'
  }
];

export default class AssetLoader {
  state: ClientState;

  fontLoader: FontLoader;

  constructor (state: ClientState) {
    this.state = state;
    this.fontLoader = new FontLoader();
  }

  async load(): Promise<void> {
    await this.fontLoader.load(FONTS);

    this.state.hasFonts = true;
  }
}
