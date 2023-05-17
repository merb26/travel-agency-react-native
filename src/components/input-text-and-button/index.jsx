import { TextInput, View } from "react-native";

import styles from "./styles";
import ButtonCustom from "../button-custom";

const InputTextAndBtn = ({ placeHolderText, buttonText }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder={placeHolderText} />
      <ButtonCustom />
    </View>
  );
};

export default InputTextAndBtn;
