import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

const { Text } = require("react-native");

const Footer = ({ onPressMenu, onPressStart }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={onPressStart}>
          <Text>Inicio</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onPressMenu}>
          <Text>Menú</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
