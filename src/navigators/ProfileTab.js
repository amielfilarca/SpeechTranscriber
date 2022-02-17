import React from "react";
import  'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from "../constant/navigationStrings";
import imagePath from "../constant/imagePath"
import { Image } from "react-native";

import { EditProfile, Profile } from "../screen";


const Tab = createBottomTabNavigator();



function ProfileTab() {
  return (
      <Tab.Navigator
        initialRouteName={navigationStrings.TPROFILE}
        screenOptions = {{ 
          headerShown: false,
          tabBarActiveTintColor: '#2c599d',
          tabBarInactiveTintColor: '#545454',
          tabBarShowLabel: false,
          tabBarStyle:{
              backgroundColor: '#f9872f',
              height: 55,
          }
        }}
      >
        <Tab.Screen 
            name={navigationStrings.TPROFILE} component={Profile} 
            options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <Image 
                        source = {imagePath.icProfile} 
                        style ={{
                          width: 35, 
                          height: 35,
                          tintColor: focused ? '#2c599d':'#545454'
                        }}/>
                    )
                }
            }}
            />
        <Tab.Screen 
        name={navigationStrings.TEDITPRO} component={EditProfile} 
        options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <Image 
                        source = {imagePath.icMan} 
                        style ={{
                          width: 35, 
                          height: 35,
                          tintColor: focused ? '#2c599d':'#545454'
                        }}/>
                    )
                }
            }}
        /> 
      </Tab.Navigator>

  );
}

export default ProfileTab;