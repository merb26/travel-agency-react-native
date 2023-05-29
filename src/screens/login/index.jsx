import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";

import styles from "./styles";
import { authAction } from "../../store/actions";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const customAlert = [{ text: "Aceptar", style: "cancel" }];

    if (email === "") {
      Alert.alert("Error", "Debe ingresar email.", customAlert);
      return;
    }

    if (password === "") {
      Alert.alert("Error", "Debe ingresar contraseña.", customAlert);
      return;
    }

    dispatch(authAction({ email, password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        style={styles.txtInputEmail}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.txtInputPassword}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.forget}>¿Olvidaste la contraseña?</Text>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.btn}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
