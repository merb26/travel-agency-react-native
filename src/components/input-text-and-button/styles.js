import { StyleSheet } from "react-native";
import colors from "../../styles/themes";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    width: "75%",
    padding: 10,
    borderWidth: 2,
    borderColor: colors.third,
    borderRadius: 30,
  },
});

export default styles;
