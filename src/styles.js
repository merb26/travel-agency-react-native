import { StyleSheet } from "react-native";

import { colors } from "./constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
