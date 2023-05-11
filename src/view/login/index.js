import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
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
    if (email === dataAdmin.email && password === dataAdmin.password) {
      onPressStart();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={handleEmailChange}
        style={styles.txtInputLogin}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
        style={styles.txtInputLogin}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.btn}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
