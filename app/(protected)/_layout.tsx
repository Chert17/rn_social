import { useAuth } from '@/providers';
import { Redirect, Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function ProtectedLayout() {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href={'/(auth)/sign_in'} />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="new" options={{ title: '', presentation: 'modal' }} />
    </Stack>
  );
}
