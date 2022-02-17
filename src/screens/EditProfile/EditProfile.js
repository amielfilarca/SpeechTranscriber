import React from 'react';
import HeaderComp from '../../components/HeaderComp';
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../EditProfile/styles';

const EditProfile = ({ navigation }) => {
  return (
    <View style = {styles.BackgroundContainer}>
      <Text style={styles.TextTitle}>
        Edit Profile Information
      </Text>
    </View>
  );
}

export default EditProfile;