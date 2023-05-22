import { Text, View } from "react-native";

import styles from "./styles";

const ItemFlights = ({ item }) => (
  <View style={styles.boxCard}>
    <View style={styles.boxOriginDestination}>
      <Text style={styles.origen}>Origen: {item.origen}</Text>
      <Text style={styles.destino}>Destino: {item.destino}</Text>
    </View>
    <Text style={styles.fecha}>Fecha: {item.fecha}</Text>
    <Text style={styles.horario}>Horario: {item.horario} hrs</Text>
    <Text style={styles.tipo}>Tipo: {item.tipo}</Text>
  </View>
);

export default ItemFlights;
