import '../global.css';

import { Slot } from 'expo-router';

import { AuthProvider } from '@/providers';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: '#0a0a0a',
  },
};

export default function Layout() {
  return (
    <AuthProvider>
      <ThemeProvider value={CustomTheme}>
        <Slot />
      </ThemeProvider>
    </AuthProvider>
  );
}
