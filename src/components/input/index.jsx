import { TextInput, View } from "react-native";

import { styles } from "./styles";

const Input = ({ placeHolderText, style, value, setValue }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.inputText}
        placeholder={placeHolderText}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default Input;
