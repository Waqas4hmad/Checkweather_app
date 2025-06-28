import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text }]}>
        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
        thumbColor={theme === 'dark' ? '#fff' : '#000'}
        trackColor={{ true: '#666', false: '#ccc' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  text: {
    marginRight: 10,
    fontSize: 18,
  },
});

export default ThemeToggle;