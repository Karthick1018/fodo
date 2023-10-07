import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import SearchBar from 'react-native-search-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';



const Address = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 10.7392,
    longitude: 77.5237,
  });

  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  const handleTextPress = () => {
    setSelectedLocation({
      latitude: 10.7392,
      longitude: 77.5237,
    });
  };

  const handlelocationPress = () => {
    setSelectedLocation({
      latitude: 10.7349,
      longitude: 77.5272,
    });
  };
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Items')
  }

  return (
    <SafeAreaView style={{ height: 822, backgroundColor: '#FFFFFF' }}>
      <TouchableOpacity>
        <Text
          style={styles.heading}>
          Delivery Location
        </Text>
      </TouchableOpacity>
      <View
        style={styles.searchview}>
        <SearchBar
          placeholder='Search location' />
      </View>
      <View
        style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 10.7392,
            longitude: 77.5237,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={handleMapPress}
        >
          <Marker
            coordinate={selectedLocation}
          />
        </MapView>
      </View>
      <View
        style={styles.locationview}>
        <Ionicons
          name="location"
          size={25}
          color="#6DBC2B"
          style={{ right: '30%' }} />
        <TouchableOpacity
          onPress={handleTextPress}>
          <View>
            <Text
              style={styles.locationtext}>
              18, Dharapuram, Tamil Nadu, India
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ top: '50%' }}>
        <TouchableOpacity onPress={handlelocationPress}>
          <View>
            <Text
              style={styles.svrtext}>
              14, SVR VISUALS , DHARAPURAM
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', left: '4%' }}>
        <View style={styles.homeview}>
          <TouchableOpacity style={styles.address}>
            <AntDesign name="home" size={20} color="#FFFFFF" style={styles.icon} />
            <Text style={styles.addresstext}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.homeview}>
          <TouchableOpacity style={{ ...styles.address, backgroundColor: '#FFFFFF' }}>
            <Icon name="office-building" size={34} style={{ ...styles.icon, color: '#6DBC2B' }} />
            <Text style={{ ...styles.addresstext, color: '#000000' }}>
              Office
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.homeview}>
          <TouchableOpacity style={{ ...styles.address, backgroundColor: '#FFFFFF' }}>
            <Ionicons
              name="location"
              size={25}
              color="#6DBC2B"
              style={{ right: '30%' }} />
            <Text style={{ ...styles.addresstext, color: '#000000' }}>
              Others
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.continueview}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.continuetext}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Address;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    top: '50%',
    left: '5%'
  },
  searchview: {
    top: '5%',
    paddingHorizontal: '5%'
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: '35%',
    top: '16%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationview: {
    top: '100%',
    left: '8%',
    flexDirection: 'row'
  },
  locationtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000'
  },
  svrtext: {
    fontSize: 15,
    left: '20%',
    fontWeight: 'bold',
    color: '#000000',
  },
  border: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 5,
    marginVertical: 8,
  },
  continueview: {
    backgroundColor: '#6DBC2B',
    height: '6%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius:15,
    justifyContent: 'center',
  },
  continuetext: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF'
  },
  homeview: {
    marginTop: '135%',
    right: '2%',
  },
  address: {
    backgroundColor: '#6DBC2B',
    width: '60%',
    height: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '10%',
    borderWidth: 1,
    borderColor: '#6DBC2B'
  },
  addresstext: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  icon: {
    right: '15%'
  }
});
