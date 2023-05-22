import { StyleSheet } from "react-native";

import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  boxInputs: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "45%",
  },
  boxButton: {
    width: "100%",
    alignItems: "center",
  },
  buttonCustom: {
    width: 150,
  },
});

export default styles;
