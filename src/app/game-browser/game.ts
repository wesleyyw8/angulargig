export interface Game {
  GameId: number;
  Name: string;
  SuggestedHeight: number;
  SuggestedWidth: number;
  Description: string;
  GameType: string;
  Vendor: string;
  BigTile: boolean;
  RealOnly: boolean;
  TopEmoticon: any;
  BottomEmoticon: any;
  ReturnAmount: number;
  IsChildish: boolean;
  Enabled: boolean;
  IsDesktop: boolean;
  IsMobile: boolean;
}
