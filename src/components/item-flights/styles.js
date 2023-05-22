import { StyleSheet } from "react-native";

import { colors, fonts } from "./../../constants/themes/index";

const styles = StyleSheet.create({
  boxCard: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    padding: 5,
  },
  boxOriginDestination: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  origen: {
    fontFamily: fonts.textRegular,
    fontWeight: "bold",
  },
  destino: {
    fontFamily: fonts.textRegular,
    fontWeight: "bold",
  },
  fecha: {
    fontFamily: fonts.textRegular,
  },
  horario: {
    fontFamily: fonts.textRegular,
  },
  tipo: {
    fontFamily: fonts.textRegular,
  },
});

export default styles;
