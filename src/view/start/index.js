import { View } from "react-native";
import data from "../../data/dataVuelos";
import InputTextAndBtn from "../../components/input-text-and-button";
import ButtonCustom2 from "../../components/button-custom-2";
import ListItems from "../../components/list-items";
import { useState } from "react";
import styles from "./styles";

const Start = ({ onPressView }) => {
  const [isActived, setIsActived] = useState("vuelos");
  const [dataVuelos, setDataVuelos] = useState(data);

  const handlePressVuelos = (e) => {
    setIsActived("vuelos");
  };

  const handlePressHospedajes = (e) => {
    setIsActived("hospedajes");
  };

  const handlePressPaquetes = (e) => {
    setIsActived("paquetes");
  };

  return (
    <View style={styles.container}>
      <InputTextAndBtn placeHolderText={"Buscar por ubicación"} />
      <View style={styles.boxButtons}>
        <ButtonCustom2
          onPress={handlePressVuelos}
          title={"Vuelos"}
          style={isActived === "vuelos" ? styles.active : ""}
        />
        <ButtonCustom2
          onPress={handlePressHospedajes}
          title={"Hospedajes"}
          style={isActived === "hospedajes" ? styles.active : ""}
        />
        <ButtonCustom2
          onPress={handlePressPaquetes}
          title={"Paquetes"}
          style={isActived === "paquetes" ? styles.active : ""}
        />
      </View>
      <ListItems data={dataVuelos} />
    </View>
  );
};

export default Start;
