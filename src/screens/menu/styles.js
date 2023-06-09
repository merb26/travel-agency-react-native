import { StyleSheet } from "react-native";

import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    gap: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  btn: {
    fontFamily: "Raleway-Regular",
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;
