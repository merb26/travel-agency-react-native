import { useState } from "react";
import { View } from "react-native";

import styles from "./styles";
import { InputTextAndBtn, ItemFlights, ListItems } from "../../components";
import { flights } from "../../database";

const Flights = () => {
  const [dataVuelos, setDataVuelos] = useState(flights);

  return (
    <View style={styles.container}>
      <InputTextAndBtn
        buttonText="Buscar"
        placeHolderText="Ingrese la ubicación"
      />
      <ListItems data={dataVuelos} Item={ItemFlights} />
    </View>
  );
};

export default Flights;
