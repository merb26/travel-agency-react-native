import { Text, View } from "react-native";

import styles from "./styles";

const ItemFlights = ({ item }) => (
  <View style={styles.boxCard}>
    <Text>Origen: {item.origen}</Text>
    <Text>Destino: {item.destino}</Text>
    <Text>Fecha: {item.fecha}</Text>
    <Text>Horario: {item.horario} hrs</Text>
    <Text>Tipo: {item.tipo}</Text>
  </View>
);

export default ItemFlights;
