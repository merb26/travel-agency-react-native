import { useFonts } from "expo-font";

const [loaded] = useFonts({
  "Raleway-Black": require("../../assets/fonts/Raleway-Black.ttf"),
  "Raleway-BlackItalic": require("../../assets/fonts/Raleway-BlackItalic.ttf"),
  "Raleway-Bold": require("../../assets/fonts/Raleway-Bold.ttf"),
  "Raleway-BoldItalic": require("../../assets/fonts/Raleway-BoldItalic.ttf"),
  "Raleway-ExtraBold": require("../../assets/fonts/Raleway-ExtraBold.ttf"),
  "Raleway-ExtraBoldItalic": require("../../assets/fonts/Raleway-ExtraBoldItalic.ttf"),
  "Raleway-ExtraLight": require("../../assets/fonts/Raleway-ExtraLight.ttf"),
  "Raleway-ExtraLightItalic": require("../../assets/fonts/Raleway-ExtraLightItalic.ttf"),
  "Raleway-Italic": require("../../assets/fonts/Raleway-Italic.ttf"),
  "Raleway-Light": require("../../assets/fonts/Raleway-Light.ttf"),
  "Raleway-LightItalic": require("../../assets/fonts/Raleway-LightItalic.ttf"),
  "Raleway-Medium": require("../../assets/fonts/Raleway-Medium.ttf"),
  "Raleway-MediumItalic": require("../../assets/fonts/Raleway-MediumItalic.ttf"),
  "Raleway-Regular": require("../../assets/fonts/Raleway-Regular.ttf"),
  "Raleway-SemiBold": require("../../assets/fonts/Raleway-SemiBold.ttf"),
  "Raleway-SemiBoldItalic": require("../../assets/fonts/Raleway-SemiBoldItalic.ttf"),
  "Raleway-Thin": require("../../assets/fonts/Raleway-Thin.ttf"),
  "Raleway-ThinItalic": require("../../assets/fonts/Raleway-ThinItalic.ttf"),
});

export default loaded;
