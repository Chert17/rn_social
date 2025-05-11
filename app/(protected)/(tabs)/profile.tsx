import { useAuth } from '@/providers';
import { Button, Text, View } from 'react-native';

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Profile</Text>
      <Button title="SignOut" onPress={signOut} />
    </View>
  );
}
