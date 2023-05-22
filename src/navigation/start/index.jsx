import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../../constants";
import { Categories, Flights, Lodging, Packages } from "../../screens";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Stack.Screen name="Paquetes" component={Packages} />
      <Stack.Screen name="Hospedajes" component={Lodging} />
      <Stack.Screen name="Vuelos" component={Flights} />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
