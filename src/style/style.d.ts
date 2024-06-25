import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      background_white: string;
      stroke: string;
      text: string;
      text_white: string;
      text_grey: string;
      grey: string;
      blue: string;
      pink: string;
      brown: string;
      snow: string;
    };
  }
}
