import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import AuthenticationScreen from '../screens/AuthenticationScreen'
import TranscriptionScreen from '../screens/TranscriptionScreen'
import HistoryScreen from '../screens/HistoryScreen'


const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='transcription'>
         <Stack.Screen
          name='splash'
          component={SplashScreen}
        />
        <Stack.Screen
          name='onboarding'
          component={OnboardingScreen}
        />
        <Stack.Screen
          name='authentication'
          component={AuthenticationScreen}
        />
        <Stack.Screen
          name='transcription'
          component={TranscriptionScreen}
        />
        <Stack.Screen
          name='history'
          component={HistoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
