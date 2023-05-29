import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

import styles from "./styles";
import { logoutAction } from "../../store/actions";

const Menu = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(logoutAction())}>
        <Text style={styles.btn}>Cerrar sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Menu;
