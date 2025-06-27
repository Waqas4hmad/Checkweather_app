import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LogBox } from 'react-native';
import { ScreenName } from '../enum';
import HomeScreen from '../screens/Home';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state ',
]);

export default function AppNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.HOME}
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </Stack.Navigator>
  );
}
