import React, { useCallback, useEffect, useState } from 'react';

import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { debounce } from 'lodash';
import { connect, useDispatch } from 'react-redux';

import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  View
} from 'react-native';

import {
  fetchLocations,
  fetchWeatherForecast,
  weatherdata
} from '../../redux/action/weatherAction';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CurrentWeather from '../../components/CurrentWeather';
import LocationsList from '../../components/LocationList';
import SearchBar from '../../components/SearchBar';
import { ThemedText } from '../../components/ThemedText';
import { LASTLOCATION } from '../../constants';
import { LocationData, WeatherData } from '../../types';
import styles from './style';


const Home = ({ weatherdata, fetchLocations, fetchWeatherForecast }) => {
  const dispatch = useDispatch();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [weather, setWeather] = useState<WeatherData>({});
  const [loading, setLoading] = useState(true);


  const handelLocation = (loc: { name: string }) => {
    setLocations([]);
    setShowSearchBar(false);
    setLoading(true);
    fetchWeatherForecast({
      cityName: loc.name,
    }).then(async (data: WeatherData) => {
      setWeather(data);
      await AsyncStorage.setItem(LASTLOCATION, loc.name);

      setLoading(false);
    });
  };
  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then(async (data: any) => {
        setLocations(data)
      }
      );
    }
  };

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const savedCity = await AsyncStorage.getItem(LASTLOCATION);
        if (savedCity) {
          handelLocation({ name: savedCity })
        } else {
          fetchMyWeatherData();

        }
      } catch (error) {
        console.error('Error reading from AsyncStorage:', error);
        fetchMyWeatherData();

      }
    };

    fetchCity();
  }, []);

  const fetchMyWeatherData = async () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      Location.getCurrentPositionAsync({}).then(location => {
        weatherdata(location.coords).then((data: React.SetStateAction<WeatherData>) => {
          setWeather(data);
          setLoading(false);
        });
      });
    })();
  };
  const handleDebounce = useCallback(debounce(handleSearch, 500), []);
  const { current, location } = weather;
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.logocard}>
          <Image
            style={styles.stretch}
            source={require('../../assets/images/wheathericon.png')}
          />
        <ThemedText type="title">Check Weather</ThemedText>

        </View>
        {loading ? (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>
        ) : (
          <View style={styles.loc_box}>
            <View style={styles.searchbox}>
              <SearchBar
                showSearchBar={showSearchBar}
                setShowSearchBar={setShowSearchBar}
                handleDebounce={handleDebounce}
              />
              {locations.length > 0 && showSearchBar ? (
                <LocationsList
                  locations={locations}
                  handleLocation={handelLocation}
                />
              ) : null}
            </View>
            <View style={styles.weather_card}>
              <View style={styles.weatherinfo}>
               
                <ThemedText type="subtitle">{location?.name},</ThemedText>
                <ThemedText type="defaultSemiBold">{' ' + location?.country}</ThemedText>
              </View>
              <CurrentWeather current={current} />
                
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
const mapStateToProps = (state: { weather: any; fetchLocations: any; fetchWeatherForecast: any }) => ({
  weatherdata: state.weather,
  fetchLocations: state.fetchLocations,
  fetchWeatherForecast: state.fetchWeatherForecast
})

export default connect(mapStateToProps, { weatherdata, fetchLocations, fetchWeatherForecast })(Home);