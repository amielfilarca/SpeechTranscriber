import { TouchableOpacity, Text, View, Image, } from 'react-native';
import React, { useContext, useState } from 'react';
import styles from './styles';
import imagePath from '../../constant/imagePath';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import navigationStrings from '../../constant/navigationStrings';
import SocialButton from '../../components/SocialButton';
import { AuthContext } from '../../navigation/AuthProvider'


const LoginScreen = ({ navigation }) => {

    const gotoSignUp = () => {
        navigation.navigate(navigationStrings.SSIGNUP)
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login, googleLogin } = useContext(AuthContext);
    return (
        <View style={styles.BackgroundContainer}>
            <Image
                source={imagePath.ICON2}
                style={styles.logo}
            />
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
            />

            <FormButton
                buttonTitle="Sign In"
                onPress={() => login(email, password)}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#f9872f"
                backgroundColor="#a5a5a5"
                onPress={() => googleLogin()}
            />
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={gotoSignUp}>
                <Text style={styles.navButtonText}>
                    Don't have an account? Create here
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;
