import React, { useEffect } from 'react';
import { SafeAreaView, View, ImageBackground } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Main = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const Image = () => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 1000); 
    };
    useEffect(() => {
        if (isFocused) {
            Image();
        }
    }, [isFocused]);
    
    return (
        <SafeAreaView>
            <View>
                <ImageBackground
                    source={require("D:/E-commerce/fodo/assets/splash.gif")}
                    style={{ height: '100%',width:'100%' }}
                    resizeMode="cover"
                >
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default Main;
