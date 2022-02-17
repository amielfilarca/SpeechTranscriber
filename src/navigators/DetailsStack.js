import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppDetails, AppInfo, HelpInfo } from "../screen";
import navigationStrings from "../constant/navigationStrings";

const Stack = createNativeStackNavigator();


function DetailsStack() {
  return(
    <Stack.Navigator screenOptions = {{ 
      headerShown: false,}}>
      <Stack.Screen name={navigationStrings.APPDETAILS} component = {AppDetails}/>
      <Stack.Screen name={navigationStrings.APPINFO} component = {AppInfo}/>
      <Stack.Screen name={navigationStrings.HELPINFO} component = {HelpInfo}/>
    </Stack.Navigator>
  );
}

export default DetailsStack;