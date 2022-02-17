import React, { useContext } from 'react';
import HeaderComp from '../../components/HeaderComp';
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../AppInfo/styles';
import FormButton from '../../components/FormButton';
import { AuthContext } from '../../navigation/AuthProvider';

const AppInfo = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style = {styles.BackgroundContainer}>
      <Text style={styles.TextTitle}>
        Application Information
      </Text>
      <FormButton buttonTitle='Logout' onPress={() => logout()} />
    </View>
  );
}

export default AppInfo;