import { StyleSheet } from "react-native";

import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },

  boxButtons: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 15,
    justifyContent: "space-evenly",
  },

  active: {
    backgroundColor: colors.secondary,
  },
});

export default styles;
