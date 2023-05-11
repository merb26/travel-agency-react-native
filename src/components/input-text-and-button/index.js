import { View } from "react-native";
import { TextInput } from "react-native";
import ButtonCustom from "../button-custom";
import styles from "./styles";

const InputTextAndBtn = ({ placeHolderText, buttonText }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder={placeHolderText} />
      <ButtonCustom />
    </View>
  );
};

export default InputTextAndBtn;
