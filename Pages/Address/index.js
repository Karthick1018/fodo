import React from 'react'
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Address = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity>
                <Text style={styles.locationtext}>
                    Delivery Location
                </Text>
            </TouchableOpacity>
            <View style={styles.searchview}>
                <Searchbar placeholder='Search location'/>
            </View>
        </SafeAreaView>
    )
}
export default Address;

const styles = StyleSheet.create({
    locationtext: {
        fontSize: 20,
        top: '50%',
        left: '5%'
    },
    searchview: {
        top: '5%',
        paddingHorizontal: '5%'
    }
})