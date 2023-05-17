import { Text, View } from "react-native";

import styles from "./styles";

const ItemLodging = ({ item }) => (
  <View style={styles.boxCard}>
    <Text>Nombre: {item.nombre}</Text>
    <Text>Ubicacion: {item.ubicacion}</Text>
    <Text>Descripcion: {item.descripcion}</Text>
    <Text>Precio: {item.precio} dolares por noche</Text>
    <Text>
      Disponibilidad:{" "}
      {item.disponibilidad ? "Si está disponible" : "No está disponible"}
    </Text>
  </View>
);

export default ItemLodging;
