import { FontAwesome5 } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './style';
interface SearchBarProps {
  showSearchBar: boolean;
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
  handleDebounce: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  showSearchBar,
  setShowSearchBar,
  handleDebounce,
}) => {
    const { colors } = useTheme();

  return (
    <View
      style={styles.container}
    >
      {showSearchBar ? (
        <TextInput
          onChangeText={handleDebounce}
          placeholder="Search City"
          placeholderTextColor={colors.text}
          
          style={[styles.textinput, { borderColor: colors?.border ,color: colors.text,}]}

        />
      ) : null}

      <TouchableOpacity
        onPress={() => {
          setShowSearchBar(!showSearchBar);
        }}
        style={styles.searchbutton}>
        <FontAwesome5 name="search-location" size={24} color={'#FFFFFF'} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
