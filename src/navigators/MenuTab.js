import React from "react";
import  'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from "../constant/navigationStrings";
import imagePath from "../constant/imagePath"
import { Image } from "react-native";

import { AppInfo, Transcription, History } from "../screen";


const Tab = createBottomTabNavigator();



const MenuTab = ({navigation}) => {
  return (
      <Tab.Navigator
        initialRouteName={navigationStrings.APPINFO}
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
            name={navigationStrings.TAPPINFO} component={AppInfo} 
            options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <Image 
                        source = {imagePath.icInfo} 
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
        name={navigationStrings.TTRANS} component={Transcription} 
        options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <Image 
                        source = {imagePath.icSpeak} 
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
        name={navigationStrings.THISTORY} component={History} 
        options={{
          tabBarIcon: ({focused})=>{
              return (
                  <Image 
                  source = {imagePath.icHisto} 
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

export default MenuTab;