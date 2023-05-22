import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  inputText: {
    fontFamily: "Raleway-Regular",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.third,
    borderRadius: 30,
  },
});