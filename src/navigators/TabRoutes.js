import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from "../constant/navigationStrings";
import imagePath from "../constant/imagePath"
import { Image } from "react-native";
import MenuStack from "./MenuStack";
import ProfileStack from "./ProfileStack";
import DetailsStack from "./DetailsStack";


const Tab = createBottomTabNavigator();



function TabRoutes() {
  return (
      <Tab.Navigator
        initialRouteName={navigationStrings.HOME}
        screenOptions = {{ 
          headerShown: false,
          tabBarActiveTintColor: '#ff847c',
          tabBarInactiveTintColor: '#feceab',
          tabBarShowLabel: false,
          tabBarStyle:{
              backgroundColor: '#2a363b',
              position: 'absolute',
              borderRadius: 20,
              marginHorizontal: 10,
              marginVertical: 10,
              height: 55,

          }
        }}
      >
        <Tab.Screen 
            name={navigationStrings.HOME} component={MenuStack} 
            options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <Image 
                        source = {imagePath.icHome} 
                        style ={{
                          width: 35, 
                          height: 35,
                  
                          tintColor: focused ? '#ff847c':'#545454'
                        }}/>
                    )
                }
            }}
            />
        <Tab.Screen 
        name={navigationStrings.PROFILE} component={ProfileStack} 
        options={{
                tabBarIcon: ({focused})=>{
                    return (
                        <Image 
                        source = {imagePath.icProfile} 
                        style ={{
                          width: 35, 
                          height: 35,
                          tintColor: focused ? '#ff847c':'#545454'
                        }}/>
                    )
                }
            }}
        />
        <Tab.Screen 
        name={navigationStrings.APPDETAILS} component={DetailsStack} 
        options={{
          tabBarIcon: ({focused})=>{
              return (
                  <Image 
                  source = {imagePath.icInfo} 
                  style ={{
                    width: 35, 
                    height: 35,
                    tintColor: focused ? '#ff847c':'#545454'
                  }}/>
              )
          }
      }}
      />
      </Tab.Navigator>

  );
}

export default TabRoutes;