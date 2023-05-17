import { FlatList, View } from "react-native";

import styles from "./styles";

const ListItems = ({ data, Item }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListItems;
