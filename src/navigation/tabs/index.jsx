import { Fontisto, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainNavigation from "./../start/index";
import { colors, fonts } from "../../constants";
import { Menu } from "../../screens";

const Stack = createBottomTabNavigator();

const TabsNavigation = ({ onPressLogOut }) => (
  <Stack.Navigator
    initialRouteName="Start"
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: colors.third, height: 58 },
      tabBarActiveTintColor: colors.text,
      tabBarInactiveTintColor: colors.textInactive,
      tabBarLabelStyle: {
        fontFamily: fonts.secondary,
        fontSize: 12,
        marginBottom: 5,
      },
    }}
  >
    <Stack.Screen
      name="Start"
      component={MainNavigation}
      options={{
        tabBarLabel: "Inicio",
        tabBarIcon: ({ focused, color, size }) => {
          return focused ? (
            <Fontisto name="home" size={size} color={color} />
          ) : (
            <Octicons name="home" size={size} color={color} />
          );
        },
      }}
    />
    <Stack.Screen
      name="Menu"
      component={Menu}
      options={{
        tabBarLabel: "Menú",
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={focused ? "menu-open" : "menu"}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Stack.Navigator>
);
export default TabsNavigation;
