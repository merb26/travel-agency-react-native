import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../../constants";
import { Menu, Profile } from "../../screens";

const Stack = createNativeStackNavigator();

const MenuNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigation;
