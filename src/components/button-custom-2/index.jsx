import { Text } from "react-native";

import styles from "./styles";

const ButtonCustom2 = ({ onPress, title, style }) => {
  return (
    <>
      <Text style={[styles.button, style]} onPress={onPress}>
        {title}
      </Text>
    </>
  );
};

export default ButtonCustom2;
