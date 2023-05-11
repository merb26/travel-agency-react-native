import { useState } from "react";
import Start from "./view/start";
import Menu from "./view/menu/index";
import Footer from "./components/footer";
import Login from "./view/login";
import styles from "./styles";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import colors from "./styles/themes";

export default function App() {
  const [viewSelected, setViewSelected] = useState("login");

  const handlePressMenu = () => setViewSelected("menu");
  const handlePressStart = () => setViewSelected("start");
  const handlePressLogOut = () => setViewSelected("login");

  const [loaded] = useFonts({
    "Raleway-Black": require("../assets/fonts/Raleway-Black.ttf"),
    // 'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    // 'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    // 'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    // 'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    // 'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    // 'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    // 'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    // 'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  const views = () => {
    switch (viewSelected) {
      case "start":
        return <Start />;
        break;
      case "login":
        return <Login onPressStart={handlePressStart} />;
        break;
      case "menu":
        return <Menu onPressLogOut={handlePressLogOut} />;
        break;
    }
  };

  return (
    <View style={styles.container}>
      {views()}
      {viewSelected !== "login" && (
        <Footer onPressMenu={handlePressMenu} onPressStart={handlePressStart} />
      )}
    </View>
  );
}
