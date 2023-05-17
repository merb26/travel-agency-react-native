import { StyleSheet } from "react-native";

import { colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  title: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Raleway-Black",
    marginBottom: 15,
    color: colors.secondary,
  },

  txtInputLogin: {
    fontFamily: "Raleway-Regular",
    marginBottom: 15,
    padding: 10,
  },

  btn: {
    fontFamily: "Raleway-Regular",
    textAlign: "center",
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 20,
  },
});

export default styles;
