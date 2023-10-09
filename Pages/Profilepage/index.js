import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { StyleSheet, SafeAreaView, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RadioButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [checked, setChecked] = useState('male');

    const navigation = useNavigation();

    const handleEmailChange = (text) => {
        setEmail(text);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(text)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    }
    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(text)) {
            setPhoneNumberError('Invalid phone number');
        } else {
            setPhoneNumberError('');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.backiconview} onPress={() => { navigation.navigate('Items') }}>
                    <Icon name="arrow-back" size={30} />
                </TouchableOpacity>
                <Text style={styles.headertext}>
                    Complete Your Profile
                </Text>
            </View>
            <View style={styles.imageview}>
                <Image source={require('../../assets/profile.jpg')} style={styles.profileimage} />
                <TouchableOpacity>
                    <Text style={styles.changetext}>
                        Change Profile
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nameview}>
                <Text style={styles.text}>
                    Name*
                </Text>
                <TextInput value="Karthi"
                    underlineColorAndroid={'#000000'} />
            </View>
            <View
                style={styles.emailinput}>
                <Text style={styles.text}>
                    Email*
                </Text>
                <TextInput placeholder="Email"
                    style={styles.inputtext}
                    keyboardType="email-address"
                    onChangeText={handleEmailChange}
                    underlineColorAndroid={'#000000'} />
                <Text style={{ color: 'red' }}>{emailError}</Text>
            </View>
            <View
                style={styles.phoneinput}>
                <Text style={styles.text}>
                    Phone Number*
                </Text>
                <TextInput
                    placeholder="+91  Phone Number"
                    secureTextEntry={true}
                    style={styles.inputtext}
                    keyboardType="phone-pad"
                    onChangeText={handlePhoneNumberChange}
                    underlineColorAndroid={'#000000'}
                />
                <Text style={{ color: 'red' }}>{phoneNumberError}</Text>

            </View>
            <View
                style={styles.radioButtonsContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Gender
                </Text>
                <RadioButton
                    value="male"
                    status={checked === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('male')}
                />
                <Text
                    style={styles.radioText}>Male</Text>
                <RadioButton
                    value="female"
                    status={checked === 'female' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('female')}
                />
                <Text
                    style={styles.radioText}>Female</Text>
            </View>

            <TouchableOpacity style={styles.profileview}>
                <Text style={styles.profiletext}>
                    Update Profile
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Profile

const styles = StyleSheet.create({
    container: {
        height: 822,
        backgroundColor: '#FFFFFFF'
    },
    backiconview: {
        marginTop: '5%',
        marginLeft: '5%'
    },
    headertext: {
        marginTop: '6%',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '10%'
    },
    imageview: {
        marginLeft: '35%',
        marginTop: '15%',
        height: '15%'
    },
    profileimage: {
        height: '100%',
        width: '45%',
        borderRadius: 50
    },
    changetext: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    nameview: {
        marginLeft: '8%',
        marginTop: '8%'
    },
    emailinput: {
        marginLeft: '8%',
        marginTop: '5%'
    },
    phoneinput: {
        marginLeft: '8%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    radioButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '5%',
        left: '4%'
    },
    radioText: {
        marginLeft: 5,
        fontSize: 16
    },
    profileview: {
        marginTop: '55%',
        backgroundColor: '#6DBC2B',
        height: '5%'
    },
    profiletext: {
        textAlign: 'center',
        top: '8%',
        fontWeight: 'bold',
        fontSize: 18
    }
})

