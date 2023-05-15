import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

const { Text } = require("react-native");

const Footer = ({ onPressMenu, onPressStart }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={onPressStart}>
          <Text style={styles.title}>Inicio</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onPressMenu}>
          <Text style={styles.title}>Menú</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
