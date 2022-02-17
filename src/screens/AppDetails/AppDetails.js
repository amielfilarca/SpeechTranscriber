import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from '../AppDetails/styles';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import navigationStrings from '../../constant/navigationStrings';

const AppDetails = ({ navigation }) => {
    return (
        <View style={styles.BackgroundContainer}>
          <Text style = {styles.TextTitle}> Info Screen </Text>
      </View>
  
    );
}

export default AppDetails;