import { NavigationContainer } from "@react-navigation/native";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import Login from "./../screens/login/index";
import TabsNavigation from "./tabs";

const Navigation = () => {
  const { isAuth, isClick } = useSelector((state) => state.auth);

  if (isClick && !isAuth) {
    Alert.alert("Error", "Datos incorrectos, intente de nuevo.", [
      { text: "Aceptar", style: "cancel" },
    ]);
  }

  return (
    <NavigationContainer>
      {isAuth ? <TabsNavigation /> : <Login />}
    </NavigationContainer>
  );
};

export default Navigation;
