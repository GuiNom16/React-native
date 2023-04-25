import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Chat from "../../screens/Chat/Chat";
import Help from "../../screens/Help/Help";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function MyTab() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white", marginTop: insets.top },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Chat}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Report"
        component={Help}
        options={{ tabBarLabel: "Report" }}
      />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
