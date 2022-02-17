import React from "react";
import  'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Profile, AppDetails } from "../screen";
import navigationStrings from "../constant/navigationStrings";
import TabRoutes from "./TabRoutes";
import MenuTab from "./MenuTab";
import ProfileTab from "./ProfileTab";
import DetailsTab from "./DetailsTab";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

function AppStack({navigation}) {
  return (
      <Drawer.Navigator
        screenOption={{ headerShown: false }}
      >
        <Drawer.Screen component={MenuTab} name = {navigationStrings.MENU}/>
        <Drawer.Screen component={ProfileTab} name = {navigationStrings.PROFILE}/>
        <Drawer.Screen component={DetailsTab} name = {navigationStrings.APPDETAILS}/>
      </Drawer.Navigator>

  );
}

export default AppStack;

