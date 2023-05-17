import { StyleSheet } from "react-native";

import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontFamily: "Raleway-Regular",
    width: "75%",
    padding: 10,
    borderWidth: 2,
    borderColor: colors.third,
    borderRadius: 30,
  },
});

export default styles;
