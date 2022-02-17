import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import SocialButton from '../../components/SocialButton';
import navigationStrings from '../../constant/navigationStrings';
import { AuthContext } from '../../navigation/AuthProvider';
import styles from '../LoginScreen/styles';



const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


  const { register } = useContext(AuthContext)


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onEndEditing={(e) => handlePasswordChange(e.nativeEvent.text)}
      />
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => register(email, password)}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
          Privacy Policy
        </Text>
      </View>
      <View>
        <SocialButton
          buttonTitle="Sign Up with Google"
          btnType="google"
          color="#f9872f"
          backgroundColor="#a5a5a5"
          onPress={() => { }}
        />
      </View>


      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate(navigationStrings.SLOGIN)}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;