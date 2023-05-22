import { NavigationContainer } from "@react-navigation/native";

import TabsNavigation from "./tabs";

const Navigation = ({onPressLogOut}) => {
  return (
    <NavigationContainer>
      <TabsNavigation onPressLogOut={onPressLogOut} />
    </NavigationContainer>
  );
};

export default Navigation;
