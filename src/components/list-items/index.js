import { FlatList, Text, View } from "react-native";
import styles from "./styles";

const ListItems = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.boxCard}>
            <Text>Origen: {item.origen}</Text>
            <Text>Destino: {item.destino}</Text>
            <Text>Fecha: {item.fecha}</Text>
            <Text>Horario: {item.horario} hrs</Text>
            <Text>Tipo: {item.tipo}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListItems;
