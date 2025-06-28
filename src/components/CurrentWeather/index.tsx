import React from 'react';
import { Image, View } from 'react-native';

import removeStartingDoubleSlash from '../../helpers/removeStartingDoubleSlash';
import { CurrentWeatherData } from '../../types/CurrentWeatherData';
import { ThemedText } from '../ThemedText';
import styles from './style';

type CurrentWeatherProp = {
  current?: CurrentWeatherData;
};
const CurrentWeather: React.FC<CurrentWeatherProp> = ({ current }) => {
  return (
    <>
      <View style={styles.icon_card}>
        <Image
          source={{
            uri:
              'https://' +
              removeStartingDoubleSlash(current?.condition?.icon || ''),
          }}
          style={styles.icon}
        />
        <ThemedText type="defaultSemiBold"> {current?.condition?.text ? '(' + current?.condition?.text + ')' : ''}</ThemedText>
      </View>
      <View style={styles.temp_box}>
        <ThemedText type="default"> Temperature: {current?.temp_c}&#176;</ThemedText>
      </View>

    </>
  );
};

export default CurrentWeather;
