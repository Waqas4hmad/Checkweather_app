import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from '../contexts/ThemeContext';

import { ScreenName } from '../enum';
import store from '../redux/store';
import HomeScreen from '../screens/Home';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state ',
]);

export default function AppNavigation() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.HOME}
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
      </ThemeProvider>
    </StoreProvider>

  );
}
