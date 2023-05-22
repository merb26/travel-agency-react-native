import { StyleSheet } from "react-native";

import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    gap: 10,
  },

  item: {
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 20,
    fontFamily: "Raleway-Regular",
  },
});

export default styles;
