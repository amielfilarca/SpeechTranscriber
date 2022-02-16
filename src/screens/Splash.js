import React from 'react';
import { View, StatusBar, Image } from 'react-native';

const Splash = ({navigation}) => {

    setTimeout(() => {
        navigation.replace('Onboarding')
    }, 3500)

  return (
    <View 
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

    </View>
  );
};

export default Splash;
