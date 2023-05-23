import { Text, View } from "react-native";

import styles from "./styles";

const ItemFlights = ({ item }) => (
  <View style={styles.boxCard}>
    <View style={styles.boxOriginDestination}>
      <Text style={styles.origen}>Origen: {item.origen.pais} </Text>
      <Text style={styles.destino}>Destino: {item.destino.pais}</Text>
    </View>
    <Text style={styles.fecha}>Fecha: {item.fecha.salida}</Text>
    <Text style={styles.horario}>Horario salida: {item.hora_salida} hrs</Text>
    <Text style={styles.horario}>Horario llegada: {item.hora_llegada} hrs</Text>
    <Text style={styles.tipo}>Tipo: {item.tipo}</Text>
  </View>
);

export default ItemFlights;
