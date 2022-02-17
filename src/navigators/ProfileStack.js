import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constant/navigationStrings";
import { EditProfile, Profile } from "../screen";

const Stack = createNativeStackNavigator();


function ProfileStack() {
  return(
    <Stack.Navigator screenOptions = {{ 
      headerShown: false,}}>
      <Stack.Screen name={navigationStrings.PROFILE} component = {Profile}/>
      <Stack.Screen name={navigationStrings.EDITPRO} component = {EditProfile}/>


    </Stack.Navigator>
  );
}

export default ProfileStack;