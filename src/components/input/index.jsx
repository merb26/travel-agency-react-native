import { TextInput, View } from "react-native";

import { styles } from "./styles";

const Input = ({ placeHolderText, style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.inputText} placeholder={placeHolderText} />
    </View>
  );
};

export default Input;
