
export enum MenuType {
  LANDING,

  CASINO_LOBBY,
  CASINO_LOGIN,
  CASINO_ENROLL,

  CASINO_WHEEL
}

export enum WheelColor {
  PARAMOUR,
  MIRAGE,
  SHOOTER
}

export default class ClientState {

  hasFonts: boolean = false;

  currentMenu: MenuType = MenuType.LANDING;

  roleGambler: boolean = false;
  roleSpectator: boolean = false;



  wheelBetColor: WheelColor | undefined = undefined;
  wheelBetAmount: number = 0;

}
