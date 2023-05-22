import { useState } from "react";
import { View } from "react-native";

import styles from "./styles";
import { Input, ItemFlights, ListItems } from "../../components";
import ButtonCustom from "../../components/button-custom";
import { flights } from "../../database";

const Flights = () => {
  const [dataVuelos, setDataVuelos] = useState(flights);

  return (
    <View style={styles.container}>
      <View style={styles.boxInputs}>
        <Input style={styles.input} placeHolderText="Ingrese el origen" />
        <Input style={styles.input} placeHolderText="Ingrese el destino" />
      </View>
      <View style={styles.boxButton}>
        <ButtonCustom
          style={styles.buttonCustom}
          onPressButton={() => console.warn("hiciste clik")}
          title="Buscar"
        />
      </View>
      <ListItems data={dataVuelos} Item={ItemFlights} />
    </View>
  );
};

export default Flights;
