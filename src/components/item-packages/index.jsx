import { Text, View } from "react-native";

import styles from "./styles";

const ItemPackages = ({ item }) => (
  <View style={styles.boxCard}>
    <Text>Origen: {item.origin}</Text>
    <Text>Destino: {item.destination}</Text>
    <Text>
      Fecha y hora: {item.flightDate} {item.flightTime}{" "}
    </Text>
    <Text>Hotel: {item.hotelName}</Text>
    <Text>Dirección del hotel: {item.hotelAddress}</Text>
    <Text>Precio: {item.price} dolares</Text>
  </View>
);

export default ItemPackages;
