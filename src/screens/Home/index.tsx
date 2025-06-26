
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import {
  ScrollView, View
} from 'react-native';

import { SearchBar } from '@rneui/themed';
import style from './style';

export default function HomeScreen() {
 
const [search, setSearch] = useState("");

const updateSearch = (search:any) => {
  setSearch(search);
};
  

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} >
      <View style={style.container}>
      <StatusBar style="light" />
      <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}/>
      </View>
    </ScrollView>
  );
}