import React from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const Cart = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerview}>
                <TouchableOpacity
                    style={styles.backiconview}
                    onPress={() => { navigation.navigate('Foods') }}>
                    <AntDesign name="arrowleft" size={30} />
                    <Text style={styles.headertext}>
                        Confirm Order
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.messview1}>
                <Text style={styles.messtext1}>
                    Madurai Mess
                </Text>
            </View>
            <View style={styles.foodview1}>
                <Icon name='square-circle' size={20} style={styles.nonvegicon} />
                <Text style={styles.messtext1}>
                    Naatu Kozhi Kolambu
                </Text>
                <Entypo name="rupee" size={20} color={'#6DBC2B'} style={styles.ruppeicon} />
                <Text style={styles.ruppe}>
                    110
                </Text>
            </View>
            <View style={styles.messview2}>
                <Text style={styles.messtext1}>
                    Aasif Restaurant
                </Text>
            </View>
            <View style={styles.foodview1}>
                <Icon name='square-circle' size={20} style={{ ...styles.nonvegicon, color: '#6DBC2B' }} />
                <Text style={styles.messtext1}>
                    Idly
                </Text>
                <Entypo name="rupee" size={20} color={'#6DBC2B'} style={{ ...styles.ruppeicon, marginLeft: '57%' }} />
                <Text style={{ ...styles.ruppe }}>
                    110
                </Text>
            </View>
            <View style={styles.textinputview}>
                <View style={styles.iconWrapper}>
                    <Entypo name="bookmark" size={20} color={'#6DBC2B'} style={styles.inputIcon} />
                    <TextInput
                        placeholder='Enter Promocode'
                        placeholderTextColor={'#6DBC2B'}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.paymentview}>
                <Text style={{marginLeft:'6%'}}>
                    PAYMENT INFO
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.messtext1}>
                        Naatu Kozhi Kolambu
                    </Text>
                    <Entypo name="rupee" size={20} color={'#6DBC2B'} style={styles.ruppeicon} />
                    <Text style={styles.ruppe}>
                        110
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.messtext1}>
                        Idly
                    </Text>
                    <Entypo name="rupee" size={20} color={'#6DBC2B'} style={{ ...styles.ruppeicon, marginLeft: '57%' }} />
                    <Text style={{ ...styles.ruppe}}>
                        110
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.payview} onPress={() => { navigation.navigate('Payment') }}>
                <Text style={styles.paytext}>
                    Pay  $220
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Cart;

const styles = StyleSheet.create({
    container: {
        height: 822
    },
    backiconview: {
        marginTop: '5%',
        marginLeft: '5%',
        flexDirection: 'row'
    },
    headerview: {
        marginLeft: '3%',
        marginTop: '2%',
    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '7%',
    },
    messview1: {
        backgroundColor: '#F5F5F5',
        height: '10%',
        marginTop: '5%'
    },
    messtext1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '6%',
        marginLeft: '5%'
    },
    foodview1: {
        backgroundColor: '#FFFFFF',
        height: '10%',
        flexDirection: 'row',
        marginTop: '5%'

    },
    ruppeicon: {
        marginLeft: '20%',
        marginTop: '7%'
    },
    ruppe: {
        marginTop: '6%',
        marginLeft: '6%',
        fontSize: 18,
        fontWeight: 'bold'
    },
    nonvegicon: {
        marginTop: '6.5%',
        marginLeft: '2%',
        color: '#8c2038'
    },
    messview2: {
        height: '8%',
        marginTop: '5%',
        backgroundColor: '#F5F5F5',
    },
    textinputview: {
        height: '7%',
        marginTop: '10%',
        borderRadius: 10,
        marginHorizontal: '12%',
        borderColor: '#6DBC2B',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    inputIcon: {
        marginRight: '10%',
    },
    input: {
        height: 50,
        fontSize: 18,
    },
    payview: {
        backgroundColor: '#6DBC2B',
        height: '7%',
        marginTop: '9%',
        borderRadius: 20,
        alignItems: 'center'
    },
    paytext: {
        marginTop: '4%',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    paymentview: {
        height: '20%',
        marginTop: '5%'
    }
})