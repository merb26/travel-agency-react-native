import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

const { View, Text, TouchableOpacity } = require("react-native");

const Categories = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Vuelos")}>
        <Text style={styles.item}>Vuelos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Hospedajes")}>
        <Text style={styles.item}>Hospedajes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Paquetes")}>
        <Text style={styles.item}>Paquetes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Categories;
