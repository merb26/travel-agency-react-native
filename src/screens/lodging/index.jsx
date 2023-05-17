import { View } from "react-native";

import styles from "./styles";
import { ItemLodging, ListItems } from "../../components";
import { lodging } from "../../database";

const Lodging = () => {
  return (
    <View style={styles.container}>
      <ListItems data={lodging} Item={ItemLodging} />
    </View>
  );
};

export default Lodging;
