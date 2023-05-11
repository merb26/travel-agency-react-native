import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Menu = ({ onPressLogOut }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLogOut}>
        <Text style={styles.btn}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
