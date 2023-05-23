import { useState } from "react";
import { View } from "react-native";

import styles from "./styles";
import { Input, ItemFlights, ListItems } from "../../components";
import ButtonCustom from "../../components/button-custom";
import { flights } from "../../database";

const Flights = () => {
  const [dataVuelos, setDataVuelos] = useState(flights);
  const [listFlights, setListFlights] = useState(flights)
  const [valueOrigin, setValueOrigin] = useState("");

  const handlePressSearch = () => {
    const search = dataVuelos.filter((item) => {
      return item.origen === valueOrigin;
    });

    setListFlights(search)
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxInputs}>
        <Input
          style={styles.input}
          placeHolderText="Ingrese el origen"
          value={valueOrigin}
          setValue={setValueOrigin}
        />
        <Input style={styles.input} placeHolderText="Ingrese el destino" />
      </View>
      <View style={styles.boxButton}>
        <ButtonCustom
          style={styles.buttonCustom}
          onPressButton={handlePressSearch}
          title="Buscar"
        />
      </View>
      <ListItems data={listFlights} Item={ItemFlights} />
    </View>
  );
};

export default Flights;
