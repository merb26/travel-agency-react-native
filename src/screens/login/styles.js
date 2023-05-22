import { StyleSheet } from "react-native";

import { colors, fonts } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  title: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: fonts.primary,
    marginBottom: 15,
    color: colors.secondary,
  },

  txtInputEmail: {
    fontFamily: fonts.primary,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.third,
  },

  txtInputPassword: {
    fontFamily: fonts.primary,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.third,
  },

  forget: {
    textAlign: "center",
    marginVertical: 15,
    fontSize: 12,
    color: colors.third,
  },

  btn: {
    fontFamily: fonts.primary,
    textAlign: "center",
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 20,
  },
});

export default styles;
