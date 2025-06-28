import React from 'react';
import { Image, View } from 'react-native';

import { useTheme } from '../../contexts/ThemeContext';
import removeStartingDoubleSlash from '../../helpers/removeStartingDoubleSlash';
import { CurrentWeatherData } from '../../types/CurrentWeatherData';
import { ThemedText } from '../ThemedText';
import styles from './style';

type CurrentWeatherProp = {
  current?: CurrentWeatherData;
};
const CurrentWeather: React.FC<CurrentWeatherProp> = ({ current }) => {
    const { colors, theme } = useTheme();
  
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
        <ThemedText color={colors.text} type="defaultSemiBold"> {current?.condition?.text ? '(' + current?.condition?.text + ')' : ''}</ThemedText>
      </View>
      <View style={styles.temp_box}>
        <ThemedText color={colors.text} type="default"> Temperature: {current?.temp_c}&#176;</ThemedText>
      </View>

    </>
  );
};

export default CurrentWeather;
