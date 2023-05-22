import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

const Menu = ({ onPressLogOut }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPressLogOut}>
        <Text style={styles.btn}>Cerrar sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Menu;
