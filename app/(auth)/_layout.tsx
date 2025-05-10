import { useAuth } from '@/providers';
import { Redirect, Slot } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function AuthLayout() {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (session) {
    return <Redirect href={'/'} />;
  }

  return <Slot />;
}
