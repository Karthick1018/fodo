import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";


const Foods = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backiconview} onPress={() => { navigation.navigate('Items') }}>
                <Icon name="arrow-back" size={30} />
            </TouchableOpacity>
            <View style={styles.restaurantview}>
                <Text style={styles.restauranttext}>
                    Aasif Restaurant
                </Text>
            </View>
            <View style={styles.starview}>
                <Text style={{ fontSize: 16 }}>
                    Indian, Chinese
                </Text>
                <TouchableOpacity style={{ marginLeft: '25%', bottom: '2%', flexDirection: 'row', backgroundColor: '#6DBC2B', width: '16%', borderRadius: 10 }}>
                    <Entypo name="star" size={24} color={'#FFFFFF'}/>
                    <Text style={{ top: '5%', left: '30%',color:'#FFFFFF' }}>
                        4.5
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Foods;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    backiconview: {
        marginTop: '5%',
        marginLeft: '5%'
    },
    restaurantview: {
        marginTop: '5%',
        marginLeft: '8%'
    },
    restauranttext: {
        fontSize: 25,
        color: '#000000',
    },
    starview: {
        marginLeft: '8%',
        marginTop: '2%',
        flexDirection: 'row'
    }
})