import React from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const onPressButton = () => {
        navigation.navigate('Verification')
    }
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:'#FFFFFF'}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "Android" ? "padding" : "height"}>
                <View
                    style={styles.logoview}>
                    <ImageBackground
                        source={require('D:/E-commerce/fodo/assets/Logo.png')}
                        style={styles.logoimg} />
                </View>
                <View
                    style={styles.imgview}>
                    <ImageBackground
                        source={require('D:/E-commerce/fodo/assets/image.png')}
                        style={styles.img} />
                </View>
                <View
                    style={styles.mobileview}>
                    <TextInput
                        style={styles.mobiletext}
                        placeholder="+91  Enter mobile number"
                        placeholderTextColor={'#bbe1f0'} />
                    <TouchableOpacity
                        onPress={onPressButton}
                        style={styles.otpbutton}>
                        <Text
                            style={styles.otptext}>
                            Send OTP
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.fbview}
                    onPress={() => Linking.openURL('https://www.facebook.com')}>
                    {/* <Image
                        source={require("D:/E-commerce/fodo/assets/Facebook - Negative.png")} 
                        style={{height:'50%'}}/> */}
                    <Text style={styles.fbtext}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
                <View
                    style={{ height: '7%', top: '6%', borderRadius: 15 }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.google.com')}>
                        <Text style={styles.googletext}>
                            Login with Goggle
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{ backgroundColor: 'red', height: '7%', top: '5.5%', borderRadius: 15 }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.gmail.com')}>
                        <Text style={styles.fbtext}>
                            Login with Gmail
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default Login;

const styles = StyleSheet.create({
    logoview: {
        height: '20%',
    },
    logoimg: {
        width: '70%',
        height: "70%",
        top: '30%',
        marginLeft: '28%',
    },
    imgview: {
        height: '45%',
    },
    img: {
        height: '90%',
        width: '100%',
        top: '10%'
    },
    mobileview: {
        height: "9%",
        flexDirection: 'row',
    },
    mobiletext: {
        marginLeft: '5%',
        fontSize: 20,
        borderWidth: 0.5,
        borderColor: '#3ae83a',
        borderRadius: 10,
        marginLeft: '6%'
    },
    otpbutton: {    
        borderWidth: 0.5,
        borderColor: '#0c94e8',
        borderRadius: 10,
        padding: '5%',
        top: '1.5%',
        marginLeft: '8%',
        height: '80%',
        backgroundColor: '#3ae83a',
    },
    otptext: {
        fontSize: 13,
        textAlign: 'center'
    },
    fbview: {
        height: '7%',
        backgroundColor: '#244992',
        top: '5%',
        borderRadius: 15
    },
    fbtext: {
        fontSize: 20,
        textAlign: 'center',
        top: '25%',
        color: '#FFFFFF',

    },
    googletext: {
        fontSize: 20,
        textAlign: 'center',
        top: '20%',
        color: '#080808'
    },
   
})