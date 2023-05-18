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

  txtInputEmail: {
    fontFamily: "Raleway-Regular",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#6CA6C1",
  },

  txtInputPassword: {
    fontFamily: "Raleway-Regular",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#6CA6C1",
  },

  forget: {
    textAlign: "center",
    marginVertical: 15,
    fontSize: 12,
    color: "#6CA6C1",
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
