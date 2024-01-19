import {
    responsiveHeight as height,
    responsiveWidth as width,
    responsiveFontSize as fontSize,
  } from 'react-native-responsive-dimensions';
  
  export const normalized = {height, width, fontSize};
  const guidelineBaseWidth = 428;
  const guidelineBaseHeight = 800;
  
  export const scale = size =>
    Math.round((normalized.width(100) / guidelineBaseWidth) * size);
  
  export const verticalScale = size =>
    Math.round((normalized.height(100) / guidelineBaseHeight) * size);
  
  export const moderateScale = (size, factor = 0.5) =>
    Math.round(size + (scale(size) - size) * factor);
  export default Theme = {
    colors: {
      white: '#fff',
      green: '#37694E',
      black: '#000000',
      gray: '#808080',
      lightblue: 'lightblue',
      lightMint: '#D9F7BE',
      dimYellow: '#FFFBD1',
      dimGreen: '#213F2F',
      mintyGreen: '#F0FAF5',
      lightred: '#FFA39E',
      darkred: '#820014',
      lightpink: '#FFF1F0',
      lightgray: '#dcdcdc',
      lightgreen: '#6DD19C',
      greywhite: '#f5f5f5',
      successGreen: '#135200',
      checkGreen: '#237804',
      red: '#FF4D4F',
      paleGreen: '#adffc3',
      mintyFresh: '#D3F1E1',
      darkRed: '#A8071A',
      mintyFrost: '#D3F1E1',
      dimBlack: '#5B5A5A',
      Darkgreen: '#2A6A3B',
      clearGreen: '#E8FAEA',
      DimBlue: '#B6E8CE',
      DullBlue: '#F0FAF5',
      background: '#FFFAEE',
      white: '#ffffff',
      primary: '#00A1D9',
      dark: '#3B404B',
      black: '#000000',
      light: '#F4F4F4',
      gray: '#888888',
      grayF9: '#F9F9F9',
      fieldBorder: '#E0E0E0',
    
      dimGray: '#F2F2F2',
      placeholder: '#797979',
      dimBlue: '#213649',
      red: '#f22c09',
      SecondaryBrown: '#C9B382',
      PrimaryBlue: '#215C73',
      naviBlue: '#DBE7F2',
      lightgray: '#E5E5E5',
      BluishGreys: '#47627B',
      BorderColor: '#B2CAE0',
      green: '#39FF14',
    orangeColor: '#F7A045',
      darkTextColor: '#262E2B',
      placeHolderColor: '#B0B0B0',
      modalBackground: '#E8E8E8',
      lightGray: '#C4C4C4',
      lightestGrey: '#D9D9D9'
    },
    fontFamily: {},
    fontSizes: {
      xxbig: normalized.fontSize(5.92), // Equivalent to 34
      xbig: normalized.fontSize(4.53), // Equivalent to 26
      big: normalized.fontSize(3.77), // Equivalent to 22
      xxmedium: normalized.fontSize(3.23), // Equivalent to 19
      xmedium: normalized.fontSize(2.84), // Equivalent to 17
      medium: normalized.fontSize(2.46), // Equivalent to 15
      small: normalized.fontSize(2.07), // Equivalent to 13
      verySmall: normalized.fontSize(1.69), // Equivalent to 11
      tinySmall: normalized.fontSize(1.3), // Equivalent to 9
    },
  };
//   export const baseUrl = {
//     api: 'https://md30-rest-api-6f22f41d1519.herokuapp.com/',
//     // api: "http://163.172.62.21/api/",
//   };
  