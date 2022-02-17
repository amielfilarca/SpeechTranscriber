import React from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';

const SplashScreen = ({navigation}) => {

    setTimeout(() => {
        navigation.replace('OnboardingScreen')
    }, 2000)

  return (
    <SafeAreaView 
        style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#30B2EA'   
    }}>
        <StatusBar 
            barStyle="light-content" 
            hidden={false}
        />

        <Image 
            source={require('../assets/images/logo.png')}
            style={{width: 300, height: 300}}
        />

    </SafeAreaView>
  );
};

export default SplashScreen;
