import { StyleSheet } from "react-native";

import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingTop: 25,
    paddingHorizontal: 10,
  },

  btn: {
    fontFamily: "Raleway-Regular",
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;
