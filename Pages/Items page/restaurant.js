import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Restaurant = () => {
    const [selectedTab, setSelectedTab] = useState('Gandhipuram');

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    }
    const navigation = useNavigation();

    const renderFoodItem = (index, source, itemName) => {

        return (
            <View
                style={{ flexDirection: "row" }}
                key={index}>
                <Image
                    source={source}
                    style={{ height: 100, width: 100, borderRadius: 14, marginLeft: '10%', marginTop: '10%' }} />
                <TouchableOpacity
                    style={{ flexDirection: 'row', borderWidth: 2, marginLeft: '40%', marginTop: '15%', height: '30%', width: '22%', alignItems: 'center', borderRadius: 20, backgroundColor: '#6DBC2B', borderColor: '#6DBC2B' }}>
                    <Text
                        style={{ fontSize: 15, color: '#FFFFFF', fontWeight: 'bold', left: '25%' }}>Book Now</Text>
                </TouchableOpacity>
                <Text
                    style={{ fontSize: 20, marginLeft: '-58%', marginTop: '18%', color: '#000000', opacity: 0.5, fontWeight: 'bold' }}>
                    {itemName}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView
            style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.backiconview}
                    onPress={() => { navigation.navigate('Items') }}>
                    <Icon name="arrow-back" size={30} />
                </TouchableOpacity>
                <View
                    style={styles.restaurantview}>
                    <Ionicons
                        name="location"
                        size={25}
                        color="#6DBC2B"
                        style={{ top: '45%', right: '3%' }}
                    />
                    <Text
                        style={styles.restauranttext}>
                        Coimbatore
                    </Text>
                </View>
                <View
                    style={styles.starview}>
                    <Text
                        style={{ fontSize: 16 }}>
                        Tamil nadu, India
                    </Text>
                    <TouchableOpacity
                        style={{ marginLeft: '20%', bottom: '2%', flexDirection: 'row', backgroundColor: '#ebedf0', width: '18%', borderRadius: 10, height: '150%', opacity: 0.5 }}>
                        <Entypo name="star" size={24} style={{ top: '5%', left: '10%' }} />
                        <Text
                            style={{ top: '10%', left: '30%' }}>
                            4.5
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginLeft: '6%', bottom: '2%', flexDirection: 'row', backgroundColor: '#ebedf0', width: '22%', borderRadius: 10, height: '150%', opacity: 0.5 }}>
                        <Entypo name="location" size={24} style={{ top: '5%', left: '10%' }} />
                        <Text
                            style={{ top: '10%', left: '30%' }}>
                            10 Km
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.tabContainer}>
                    <TouchableOpacity
                        style={styles.tab}
                        onPress={() => handleTabPress('Gandhipuram')}>
                        <Text
                            style={selectedTab === 'Gandhipuram' ? styles.activeTabText : styles.tabText}>
                            Gandhipuram
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tab} onPress={() => handleTabPress('Rs Puram')}>
                        <Text
                            style={selectedTab === 'Rs Puram' ? styles.activeTabText : styles.tabText}>
                            Rs Puram
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tab} onPress={() => handleTabPress('Ukkadam')}>
                        <Text
                            style={selectedTab === 'Ukkadam' ? styles.activeTabText : styles.tabText}>
                            Ukkadam
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tab} onPress={() => handleTabPress('singanallur')}>
                        <Text
                            style={selectedTab === 'Singanallur' ? styles.activeTabText : styles.tabText}>
                            Singanallur
                        </Text>
                    </TouchableOpacity>
                </View>
                {renderFoodItem(0, require('../../assets/res1.jpeg'), 'kokoroko')}
                {renderFoodItem(1, require('../../assets/res2.jpg'), 'HMR')}
                {renderFoodItem(2, require('../../assets/res3.jpg'), 'A B')}
                {renderFoodItem(3, require('../../assets/res4.jpg'), 'B N')}
                {renderFoodItem(4, require('../../assets/res5.jpg'), 'SS Biriyani')}
                {renderFoodItem(5, require('../../assets/res6.jpg'), 'Cafe')}
                {renderFoodItem(6, require('../../assets/res7.jpg'), 'The Village')}
                {renderFoodItem(7, require('../../assets/res8.jpeg'), 'Ic Dining')}
            </ScrollView>
            <View
                style={{ backgroundColor: '#6DBC2B', height: '7%', flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ width: '40%', backgroundColor: '#FFFFFF', marginLeft: '6%', height: '70%', top: '2%', borderRadius: 10, alignItems: 'center' }}>
                    <Text
                        style={{ fontSize: 18, fontWeight: 'bold', top: '15%', color: '#a3a39d' }}>
                        Book a Seat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: '40%', backgroundColor: '#FFFFFF', marginLeft: '6%', height: '70%', top: '2%', borderRadius: 10, alignItems: 'center' }}>
                    <Text
                        style={{ fontSize: 15, fontWeight: 'bold', top: '10%', color: '#a3a39d' }}>
                        Pay bill
                    </Text>
                    <Text >
                        Flat 10% OFF with Gold
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Restaurant;

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
        left: '7%'
    },
    starview: {
        marginLeft: '8%',
        marginTop: '2%',
        flexDirection: 'row'
    },
    menuitemview: {
        flexDirection: 'row',
        backgroundColor: 'red',
        marginTop: '8%',
        height: '5%',
    },
    menutext: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    menu: {
        left: '50%'
    },
    tabContainer: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    tab: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        opacity: 0.5
    },
    activeTabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6DBC2B',
    },
    image: {
        height: '50%',
        width: '20%'
    }
});
