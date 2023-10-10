import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";


const Foods = () => {
    const [selectedTab, setSelectedTab] = useState('Starter');
    const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    const [isVegTabSelected, setIsVegTabSelected] = useState(false);

    const navigation = useNavigation();
    const handleTabPress = (tab) => {
        setSelectedTab(tab);
        if (tab === 'veg') {
            setIsVegTabSelected(true);
        } else {
            setIsVegTabSelected(false);
        }
    };

    const increaseCount = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const decreaseCount = (index) => {
        if (counts[index] > 0) {
            const newCounts = [...counts];
            newCounts[index] -= 1;
            setCounts(newCounts);
        }
    };

    const renderFoodItem = (index, source, itemName) => {
        const borderColor = index < 4 ? '#6DBC2B' : '#8c2038';
        const color = index < 4 ? '#6DBC2B' : '#8c2038';

        if (selectedTab === 'Veg' && index > 3 && !isVegTabSelected) {
            return null;
        }

        return (
            <View
                style={{ flexDirection: "row" }} key={index}>
                <Image
                    source={source}
                    style={{ height: 100, width: 100, borderRadius: 14, marginLeft: '10%', marginTop: '10%' }} />
                <View
                    style={{ flexDirection: 'row', borderWidth: 2, marginLeft: '28%', marginTop: '15%', height: '30%', width: '30%', alignItems: 'center', borderRadius: 20, borderColor }}>
                    <TouchableOpacity
                        onPress={() => increaseCount(index)} style={{ marginLeft: '10%' }}>
                        <Text
                            style={{ fontSize: 30, right: '15%', color }}>+</Text>
                    </TouchableOpacity>
                    <Text
                        style={{ fontSize: 20, marginLeft: '20%', color: '#000000' }}>
                        {counts[index]}
                    </Text>
                    <TouchableOpacity
                        onPress={() => decreaseCount(index)}>
                        <Text
                            style={{ fontSize: 30, marginLeft: '50%', color }}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{ fontSize: 20, marginLeft: '-53%', marginTop: '18%', color: '#000000', opacity: 0.5 }}>{itemName}</Text>
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
                    <Text
                        style={styles.restauranttext}>
                        Aasif Restaurant
                    </Text>
                </View>
                <View
                    style={styles.starview}>
                    <Text style={{ fontSize: 16 }}>
                        Indian, Chinese
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
                        onPress={() => handleTabPress('Starter')}>
                        <Text
                            style={selectedTab === 'Starter' ? styles.activeTabText : styles.tabText}>Starter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab}
                        onPress={() => handleTabPress('Veg')}>
                        <Text
                            style={selectedTab === 'Veg' ? styles.activeTabText : styles.tabText}>Veg</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tab}
                        onPress={() => handleTabPress('Non Veg')}>
                        <Text style={selectedTab === 'Non Veg' ? styles.activeTabText : styles.tabText}>Non Veg</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab}
                        onPress={() => handleTabPress('Fast Food')}>
                        <Text style={selectedTab === 'Fast Food' ? styles.activeTabText : styles.tabText}>Fast Food</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{ fontSize: 20, top: '2%', left: '50%', fontWeight: 'bold', color: '#6DBC2B' }}>
                    Veg
                </Text>
                {renderFoodItem(0, require('../../assets/idli.jpg'), 'Idli')}
                {renderFoodItem(1, require('../../assets/dosa.jpeg'), 'Dosa')}
                {renderFoodItem(2, require('../../assets/chapati.jpeg'), 'Chapati')}
                {renderFoodItem(3, require('../../assets/salad.jpg'), 'Salad')}
                <Text
                    style={{ fontSize: 20, top: '2%', left: '50%', fontWeight: 'bold', color: '#8c2038' }}>
                    Non Veg
                </Text>
                {renderFoodItem(4, require('../../assets/tandoori.jpg'), 'Tandoori')}
                {renderFoodItem(5, require('../../assets/fish.jpg'), 'Fish')}
                {renderFoodItem(6, require('../../assets/lollipop.jpg'), 'Lollipop')}
                {renderFoodItem(7, require('../../assets/biryani.jpg'), 'Biryani')}
            </ScrollView>
            <View
                style={{ backgroundColor: '#6DBC2B', height: '7%', flexDirection: 'row' }}>
                <AntDesign name="shoppingcart" size={30} style={{ marginLeft: '10%', marginTop: '3%', color: '#FFFFFF' }} />
                <Text
                    style={{ marginLeft: '8%', marginTop: '4%', fontSize: 18, color: '#FFFFFF' }}>
                    2 item | ₹ 100
                </Text>
                <TouchableOpacity
                    style={{ marginLeft: '20%', top: '2%', borderWidth: 1, width: '20%', height: '65%', backgroundColor: '#FFFFFF', borderRadius: 20, borderColor: '#FFFFFF' }}
                    onPress={() => { navigation.navigate('Cart') }}>

                    <Text
                        style={{ textAlign: 'center', top: '20%', fontWeight: 'bold', color: '#6DBC2B' }}>
                        View Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
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
    },
    line: {
        width: 40,
        height: 3,
        backgroundColor: '#6DBC2B',
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
