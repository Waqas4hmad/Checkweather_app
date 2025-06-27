import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LocationData } from '../..//types';
import styles from './style';
interface LocationsListProps {
  locations: LocationData[];
  handleLocation: (location: LocationData) => void;
}

const LocationsList: React.FC<LocationsListProps> = ({
  locations,
  handleLocation,
}) => {
  return (
    <View
    style={styles.container}
      >
         
      {locations.map((loc, index) => {
      
        return (
          <TouchableOpacity
            onPress={() => handleLocation(loc)}
            key={index}
            style={styles.list}>
            <FontAwesome name="map-marker" size={20} color={'black'} />
            <Text style={styles.text}>
              {loc?.name}
            </Text>
            <Text style={styles.text}>
              {loc?.country}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LocationsList;
