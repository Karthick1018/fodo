import React from 'react'
import { ImageBackground, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView >
            <ImageBackground source={require('../../assets/pay.png')} style={{ height: '100%', bottom: '9%' }} >
                <TouchableOpacity style={{ top: '104%', height: '5%', backgroundColor: '#6DBC2B' }} onPress={() => { navigation.navigate('Items') }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' }}>
                        Thank You
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Payment;