import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';


const Verification = () => {
    const navigation = useNavigation();
    const onPressButton = () => {
        navigation.navigate('Login')
    }
    const onPress = () => {
        navigation.navigate('Address')
    }
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={onPressButton}>
                    <Text style={styles.verificationtext}>
                        Verification
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.otpview}>
                <Text style={styles.otptext}>
                    Enter verification code we've sent on given number.
                </Text>
            </View>
            <View style={styles.continue}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.continuetext}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Verification;

const styles = StyleSheet.create({
    continue: {
        height: '15%',
        backgroundColor: '#6DBC2B',
        borderRadius: 15,
        top: '185%'
    },
    continuetext: {
        textAlign: 'center',
        top: '70%',
        color:'#FFFFFF',
        fontSize:18
    },
    otpview: {
        height: '25%',
    },
    otptext: {
        fontSize: 20,
        textAlign: 'center',
        top: '30%'
    },
    verificationtext: {
        fontSize: 20,
        top: '50%',
        left: '5%'
    },

})