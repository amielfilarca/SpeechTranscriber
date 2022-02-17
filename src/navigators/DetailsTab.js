import React from "react";
import  'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from "../constant/navigationStrings";
import imagePath from "../constant/imagePath"
import { Image } from "react-native";

import { AppDetails, AppInfo, EditProfile, HelpInfo, Profile } from "../screen";


const Tab = createBottomTabNavigator();



function DetailsTab() {
  return (
      <Tab.Navigator
        initialRouteName={navigationStrings.TAPPINFO}
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
        name={navigationStrings.TAPPDETAILS} component={AppDetails} 
        options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <Image 
                        source = {imagePath.icDet} 
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
        name={navigationStrings.THELPINFO} component={HelpInfo} 
        options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <Image 
                        source = {imagePath.icHelp} 
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

export default DetailsTab;