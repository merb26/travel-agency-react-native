import { View } from "react-native";

import { ItemPackages, ListItems } from "./../../components";
import { packages } from "./../../database";
import styles from "./styles";

const Packages = () => {
  return (
    <View style={styles.container}>
      <ListItems data={packages} Item={ItemPackages} />
    </View>
  );
};

export default Packages;
