import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import styles from '../HomeScreen/styles'
import FormButton from '../../components/FormButton'
import { AuthContext } from '../../navigation/AuthProvider'
import { SafeAreaView } from 'react-native-safe-area-context'
import navigationStrings from '../../constant/navigationStrings'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HomeScreen({ navigation }) {
    const { user, logout } = useContext(AuthContext);
    return (
        <View style={styles.BackgroundContainer}>
            <Text style={styles.TextTitle}>HomeScreen</Text>
            <Text style={styles.TextTitle}>{user.uid}</Text>
            <FormButton buttonTitle='Logout' onPress={() => logout()} />
        </View>
    )
}

