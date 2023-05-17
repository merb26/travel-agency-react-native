import { useState } from "react";
import { View } from "react-native";

import styles from "./styles";
import { ButtonCustom2, InputTextAndBtn, ListItems } from "../../components";
import { flights } from "../../constants";

const Start = ({ onPressView }) => {
  const [isActived, setIsActived] = useState("vuelos");
  const [dataVuelos, setDataVuelos] = useState(flights);

  const handlePressVuelos = () => setIsActived("vuelos");

  const handlePressHospedajes = () => setIsActived("hospedajes");

  const handlePressPaquetes = () => setIsActived("paquetes");

  return (
    <View style={styles.container}>
      <InputTextAndBtn placeHolderText="Buscar por ubicación" />
      <View style={styles.boxButtons}>
        <ButtonCustom2
          onPress={handlePressVuelos}
          title="Vuelos"
          style={isActived === "vuelos" ? styles.active : ""}
        />
        <ButtonCustom2
          onPress={handlePressHospedajes}
          title="Hospedajes"
          style={isActived === "hospedajes" ? styles.active : ""}
        />
        <ButtonCustom2
          onPress={handlePressPaquetes}
          title="Paquetes"
          style={isActived === "paquetes" ? styles.active : ""}
        />
      </View>
      <ListItems data={dataVuelos} />
    </View>
  );
};

export default Start;
