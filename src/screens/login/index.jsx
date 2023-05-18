import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import styles from "./styles";

const dataAdmin = {
  email: "admin@gmail.com",
  password: "admin",
};

const Login = ({ onPressStart }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

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

    if (email !== dataAdmin.email && password !== dataAdmin.password) {
      Alert.alert("Error", "Datos incorrectos, intente de nuevo.", customAlert);
      return;
    }

    onPressStart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={handleEmailChange}
        style={styles.txtInputEmail}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
        style={styles.txtInputPassword}
      />
      <Text style={styles.forget}>¿Olvidaste la contraseña?</Text>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.btn}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
