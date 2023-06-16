import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import SvgAvatar from "../../../assets/svg/svg-avatar";
import { logoutAction } from "../../store/actions";

const Menu = ({ navigation }) => {
  const dispatch = useDispatch();

  const { imageUri } = useSelector((state) => state.profile);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {imageUri ? (
          <Image style={styles.image} source={{ uri: imageUri }} />
        ) : (
          <SvgAvatar />
        )}
      </View>
      <TouchableOpacity onPress={() => dispatch(logoutAction())}>
        <Text style={styles.btn}>Cerrar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.btn}>Cambiar foto de perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Menu;
