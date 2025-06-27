import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import {
  fetchLocations,
  fetchWeatherByLatLong,
  fetchWeatherForecast,
} from '../../api/weather';
import CurrentWeather from '../../components/CurrentWeather';
import LocationsList from '../../components/LocationList';
import SearchBar from '../../components/SearchBar';
import { LocationData, WeatherData } from '../../types';
import styles from './style';
export default function Home() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [weather, setWeather] = useState<WeatherData>({});
  const [loading, setLoading] = useState(true);

  const handelLocation = (loc: { name: string }) => {
    console.log(locations);
    setLocations([]);
    setShowSearchBar(false);
    setLoading(true);
    fetchWeatherForecast({
      cityName: loc.name,
    }).then(data => {
      setWeather(data);
      setLoading(false);
      console.log(data);
    });
  };

  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then(data => setLocations(data));
    }
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      Location.getCurrentPositionAsync({}).then(location => {
        fetchWeatherByLatLong(location.coords).then(data => {
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
          <Text style={styles.logotext}>Weather Check</Text>
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
                <Text style={styles.loctext} >
                  {location?.name},
                </Text>
                <Text  style={styles.loc_semiboldtext}>
                  {' ' + location?.country}
                </Text>
              </View>
              <CurrentWeather current={current} />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
