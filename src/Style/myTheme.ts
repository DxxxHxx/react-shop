// my-theme.ts
import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    headerColor: "white",
    bodyColor: "white",
    cardBgColor: "#F3F4F6",
    textColor: {
      brighter:"black",
      darker:"black"
    },
    footerColor: "#F2F2F2",
    inputColor:"#D1D5DB"
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    headerColor: "#191D24",
    bodyColor: "#2A303C",
    cardBgColor: "#374151",
    textColor: {
      darker:"#a6adbb",
      brighter:"white"
    },
    footerColor: "#242933",
    inputColor:"#4b5563"
  },
};

export { lightTheme, darkTheme };
