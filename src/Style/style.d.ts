import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      headerColor: string;
      bodyColor: string;
      cardBgColor: string;
      footerColor:string;
      textColor: {
        brighter:string;
        darker:string;
      }
      inputColor:string
    };
  }
}
