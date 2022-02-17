import React from 'react';
import HeaderComp from '../../components/HeaderComp';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../HelpInfo/styles';
import navigationStrings from '../../constant/navigationStrings';
import AppStack from '../../navigation/AppStack';

const HelpInfo = ({ navigation }) => {
  return (
    <View style = {styles.BackgroundContainer}>
      <Text style={styles.TextTitle}>
        Help Information
      </Text>
    </View>
  );
}

export default HelpInfo;