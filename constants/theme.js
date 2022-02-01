import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#1E1E1E",
    secondary: "#3B3B3B",

    white: "#fff",
    blue: '#5478F6',

    lightGreen: "#4BEE70",
    red: "#D84035",
    black: "#000000",
    gray: "#A5A5A5",
    gray1: "#CBCBCB",
    lightGray: "#3B3B3B",
    lightGray2: '#212125',
    lightGray3: '#757575',
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.8)',
    transparentBlack1: 'rgba(0, 0, 0, 0.4)',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 35,
    h1: 25,
    h2: 22,
    h3: 18,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    // App title
    largeTitle: { fontFamily: "Rubik-Bold", fontSize: SIZES.largeTitle },
    // Home screen headers
    h1: { fontFamily: "Rubik-Medium", fontSize: SIZES.h1, lineHeight: 36 },
    // Search and detail headers
    h2: { fontFamily: "Rubik-Bold", fontSize: SIZES.h3, lineHeight: 30 },
    h3: { fontFamily: "Rubik-Medium", fontSize: SIZES.h2 },
    h4: { fontFamily: "Rubik-Bold", fontSize: SIZES.h2, lineHeight: 22 },
    h5: { fontFamily: "Rubik-Regular", fontSize: SIZES.h2, lineHeight: 22 },
    h6: { fontFamily: "Rubik-Light", fontSize: SIZES.h3, lineHeight: 22 },
    body1: { fontFamily: "Rubik-Medium", fontSize: SIZES.h3, lineHeight: 22 },
    body2: { fontFamily: "Rubik-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    // detail headers
    body3: { fontFamily: "Rubik-Bold", fontSize: SIZES.body3, lineHeight: 22 },
    // Detail text
    body4: { fontFamily: "Rubik-Medium", fontSize: SIZES.body4, lineHeight: 22 },
    // Search bar text
    body5: { fontFamily: "Rubik-Light", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;