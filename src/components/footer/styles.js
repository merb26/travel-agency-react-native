import { StyleSheet } from "react-native";

import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end",
    marginTop: "auto",
    padding: 20,
    backgroundColor: colors.third,
  },

  title: {
    fontFamily: "Raleway-Regular",
  },
});

export default styles;
