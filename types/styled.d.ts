// styled.d.ts
import 'styled-components';
// interface IPalette {
//   main: string
//   contrastText: string
// }
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      palette1: string
      palette2: string
      palette3: string
      palette4: string
      palette5: string
      palette6: string
      black: string
      white: string
      gray: string
      greyLighter: string
      greyLightest: string
      shadow: string
      shadowLighter: string
      highlight: string
    }
    fonts: {
      header: string
      content: string
    }
    display: {
      footerHeight: string
      xsScreen: string
      sScreen: string
      mScreen: string
      lScreen: string
    }
  }
}

