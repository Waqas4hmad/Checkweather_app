import React from 'react';
import { Image, Text, View } from 'react-native';
import removeStartingDoubleSlash from '../../helpers/removeStartingDoubleSlash';
import { CurrentWeatherData } from '../../types/CurrentWeatherData';
import styles from './style';
type CurrentWeatherProp = {
  current?: CurrentWeatherData;
};
const CurrentWeather: React.FC<CurrentWeatherProp> = ({current}) => {
  return (
    <>
      {/* IMAGE VIEW */}
      <View style={styles.icon_card}>
        <Image
          source={{
            uri:
              'https://' +
              removeStartingDoubleSlash(current?.condition?.icon || ''),
          }}
         style={styles.icon}
        />
         <Text style={styles.condition_text}>
          {current?.condition?.text ? '(' + current?.condition?.text + ')' : ''}
        </Text>
      </View>
     
      <View style={styles.temp_box}>
        <Text style={styles.temp_text}>
          Temperature: {current?.temp_c}&#176;
        </Text>
      </View>
      
    </>
  );
};

export default CurrentWeather;
