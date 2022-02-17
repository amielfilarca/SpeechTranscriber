import React from "react";
import  'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constant/navigationStrings";
import { Main, Transcription, History } from "../screen";
import { HomeScreen } from "../screen";

const Stack = createNativeStackNavigator();


function MenuStack(navigation) {
  return(
    <Stack.Navigator screenOptions = {{ 
      headerShown: false,}}>
      <Stack.Screen name={navigationStrings.HOME} component = {HomeScreen}/>
      <Stack.Screen name={navigationStrings.TRANS} component = {Transcription}/>
      <Stack.Screen name={navigationStrings.HISTORY} component = {History}/>
    </Stack.Navigator>
  );
}

export default MenuStack;