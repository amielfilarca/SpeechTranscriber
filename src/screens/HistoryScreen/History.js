
import React from 'react';
import HeaderComp from '../../components/HeaderComp';
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../HistoryScreen/styles';

const History = ({ navigation }) => {
  return (
    <View style = {styles.BackgroundContainer}>
      <Text style={styles.TextTitle}>
        History Screen
      </Text>
    </View>
  );
}

export default History;