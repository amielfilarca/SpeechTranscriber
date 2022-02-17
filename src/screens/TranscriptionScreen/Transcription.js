import { Text, View } from 'react-native';
import styles from '../TranscriptionScreen/styles';
import React from 'react';
import HeaderComp from '../../components/HeaderComp';
import { SafeAreaView } from 'react-native-safe-area-context';



const Transcription = ({ navigation }) => {
  return (
    <View style={styles.BackgroundContainer}>
      <Text style={styles.TextTitle}>
        Transcription Screen
      </Text>
    </View>
  );
}

export default Transcription;