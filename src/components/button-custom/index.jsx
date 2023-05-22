import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const ButtonCustom = ({ title, onPressButton, style }) => {
  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
