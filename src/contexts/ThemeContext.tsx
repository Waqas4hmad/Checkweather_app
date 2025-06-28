import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { darkColors, lightColors } from '../constants/Colors';
type Theme = 'light' | 'dark';

interface ThemeColors {
  background: string;
  text: string;
  card: string;
  border: string;
  primary: string;
}



interface ThemeContextProps {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  colors: lightColors,
  toggleTheme: () => {},
});

const THEME_KEY = 'APP_THEME';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const getColors = (mode: Theme): ThemeColors => (mode === 'dark' ? darkColors : lightColors);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (storedTheme === 'light' || storedTheme === 'dark') {
          setTheme(storedTheme);
        } else {
          const systemColorScheme = Appearance.getColorScheme();
          setTheme(systemColorScheme ?? 'light');
        }
      } catch (error) {
        console.error('Failed to load theme:', error);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(THEME_KEY, theme).catch(error =>
      console.error('Failed to save theme:', error)
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, colors: getColors(theme), toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);