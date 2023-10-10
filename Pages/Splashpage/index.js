import React, { useEffect } from 'react';
import { SafeAreaView, View, ImageBackground } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Main = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const Image = () => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000); 
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
                    source={require("../../assets/res2.jpg")}
                    style={{ height: '100%',width:'100%' }}
                    resizeMode="cover"
                >
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default Main;
