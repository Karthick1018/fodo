import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import Entypo from "react-native-vector-icons/Entypo";
import { FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const Items = () => {
    const [showButtons, setShowButtons] = useState(true);
    const [firstSetOfData, setFirstSetOfData] = useState([]);
    const [secondSetOfData, setSecondSetOfData] = useState([]);
    const [activeIcon, setActiveIcon] = useState('search1');

    const carouselItems = [
        {
            image: { uri: 'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77662.jpg?size=626&ext=jpg&ga=GA1.2.1225766534.1693313682&semt=ais' }
        },
        {
            image: { uri: 'https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?size=626&ext=jpg&ga=GA1.1.1225766534.1693313682&semt=ais' }
        },
        {
            image: { uri: 'https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?size=626&ext=jpg&ga=GA1.1.1225766534.1693313682&semt=ais' }
        },
        {
            image: { uri: 'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.1.1225766534.1693313682&semt=ais' }
        }
    ];
    const carouselItems1 = [
        {
            image: { uri: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80' }
        },
        {
            image: { uri: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }
        },
        {
            image: { uri: 'https://media.istockphoto.com/id/1130675015/photo/luxury-table-settings-for-fine-dining-with-and-glassware-beautiful-blurred-background-for.webp?b=1&s=170667a&w=0&k=20&c=2Loh7j8mYYc_JD_3qaGMIrx8NpBXwbGxUKkAb00V37Q=' }
        },
        {
            image: { uri: 'https://media.istockphoto.com/id/1130675015/photo/luxury-table-settings-for-fine-dining-with-and-glassware-beautiful-blurred-background-for.webp?b=1&s=170667a&w=0&k=20&c=2Loh7j8mYYc_JD_3qaGMIrx8NpBXwbGxUKkAb00V37Q=' }
        }
    ];
    useEffect(() => {
        fetch('https://api.edamam.com/api/food-database/v2/parser?session=40&app_id=85b409cf&app_key=69d004c3e3c5b967261e625baea627fc')
            .then(response => response.json())
            .then(data => {
                if (data.hints && data.hints.length > 0) {
                    const firstTenItems = data.hints.slice(0, 5);
                    const secondTenItems = data.hints.slice(10, 15);
                    setFirstSetOfData(firstTenItems);
                    setSecondSetOfData(secondTenItems);

                } else {
                    console.error('No data found in response:', data);
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const renderItemapi = ({ item }) => {
        const image = item.food.image;
        return (
            <Card
                containerStyle={{ margin: 10, borderRadius: 20, borderColor: '#f7f7f5', borderWidth: 1, height: '70%' }} >
                <Image
                    source={{ uri: image }}
                    style={{ width: 100, height: 100 }}
                />
                {/* <Text
                    style={{ fontSize: 13, fontWeight: 'bold' }}>{item.food.label}
                </Text> */}
            </Card>
        );
    };

    const renderItem = ({ item, index }) => {
        return (
            <View
                style={styles.carouselItem}>
                <Image
                    source={item.image}
                    style={{ width: 300, height: 200, left: '10%' }} />
            </View>
        );
    };
    const renderItem1 = ({ item, index }) => {
        return (
            <View
                style={styles.carouselItem}>
                <Image
                    source={item.image}
                    style={{ width: 300, height: 200, left: '10%' }} />
            </View>
        );
    };

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };
    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={styles.container}>
            <ScrollView>
                <View
                    style={styles.locationview}>
                    <Ionicons
                        name="location"
                        size={25}
                        color="#6DBC2B"
                        style={{ right: '30%' }}
                    />
                    <TouchableOpacity>
                        <View>
                            <Text
                                style={styles.locationtext}>
                                18, Dharapuram, Tamil Nadu, India
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.menuview}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#f0ebeb', width: 50, height: 50, marginLeft: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                        onPress={toggleButtons}
                    >
                        <Entypo name="menu" size={24} color="#000000" style={styles.menuicon} />
                    </TouchableOpacity>

                    {showButtons && (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.scrollContainer}>
                            <TouchableOpacity
                                style={styles.ratingButton}>
                                <Text
                                    style={styles.ratingtext}>
                                    Rating 4.0+
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.ratingButton}
                                onPress={() => { navigation.navigate('Foods') }}>
                                <Text
                                    style={styles.ratingtext}>
                                    Top eats
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.ratingButton}
                                onPress={() => { navigation.navigate('Restaurant') }}>
                                <Text
                                    style={styles.ratingtext}>
                                    Reservation
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.ratingButton}>
                                <Text
                                    style={styles.ratingtext}>
                                    Orders
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.ratingButton}>
                                <Text
                                    style={styles.ratingtext}>
                                    Offers
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )}
                </View>
                <TouchableOpacity
                    style={styles.foodforview}
                    onPress={() => { navigation.navigate('Foods') }}>
                    <Text
                        style={styles.foodfortext}>
                        Food for You
                    </Text>
                </TouchableOpacity>
                <Carousel
                    data={carouselItems}
                    renderItem={renderItem}
                    sliderWidth={400}
                    itemWidth={400}
                    autoplay={true}
                    autoplayInterval={4000}
                    loop={true}
                />
                <View
                    style={{ height: '20%', justifyContent: 'center', alignItems: 'center', marginTop: '10%', justifyContent: 'space-between' }}>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={firstSetOfData}
                        renderItem={renderItemapi}
                        keyExtractor={item => item.food.foodId}
                    />
                </View>
                <View
                    style={{ height: '20%', justifyContent: 'center', alignItems: 'center', marginTop: '-6%', justifyContent: 'space-between' }}>
                    <FlatList horizontal showsHorizontalScrollIndicator={false}
                        data={secondSetOfData}
                        renderItem={renderItemapi}
                        keyExtractor={item => item.food.foodId}
                    />
                </View>
                <TouchableOpacity
                    style={{ ...styles.foodforview }}
                    onPress={() => { navigation.navigate('Restaurant') }}>
                    <Text
                        style={{ ...styles.foodfortext, top: '90%' }}>
                        Restaurant for You
                    </Text>
                </TouchableOpacity>
                <Carousel
                    data={carouselItems1}
                    renderItem={renderItem1}
                    sliderWidth={400}
                    itemWidth={400}
                    autoplay={true}
                    autoplayInterval={4000}
                    loop={true}
                />
            </ScrollView>
            <View
                style={{ height: '8%', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, top: 15, marginTop: -10 }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Login'); }}>
                    <AntDesign name="home" size={24} color={activeIcon === 'home' ? '#6DBC2B' : '#000000'} />
                </TouchableOpacity >
                <TouchableOpacity
                    onPress={() => setActiveIcon('search1')} >
                    <AntDesign name="search1" size={24} color={activeIcon === 'search1' ? '#6DBC2B' : '#000000'} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setActiveIcon('bells')} >
                    <AntDesign name="bells" size={24} color={activeIcon === 'bells' ? '#6DBC2B' : '#000000'} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Profile'); }} >
                    <Fontisto name="person" size={24} color={activeIcon === 'person' ? '#6DBC2B' : '#000000'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


export default Items;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    locationview: {
        top: '5%',
        left: '4%',
        flexDirection: 'row',
    },
    locationtext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    carouselItem: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
    },
    carouselTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    activeSlideText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
    },
    menuview: {
        marginTop: '15%',
        height: '15%',
        flexDirection: 'row'
    },
    menuicon: {
        top: '5%'
    },
    scrollContainer: {
        flexDirection: 'row',
    },
    ratingButton: {
        borderWidth: 1,
        borderRadius: 10,
        width: 120,
        height: 50,
        backgroundColor: '#6DBC2B',
        borderColor: '#f0ebeb',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    ratingtext: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    foodforview: {
        justifyContent: 'center',
        bottom: '5%'
    },
    foodfortext: {
        left: '10%',
        fontSize: 25,
        fontWeight: 'bold',
        opacity: 0.5,
    },
    continueview: {
        backgroundColor: '#6DBC2B',
        height: '6%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
    },
    continuetext: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFFFFF'
    },
});
