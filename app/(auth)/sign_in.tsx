import { useAuth } from '@/providers';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function SignIn() {
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');

  const handleSignIn = () => {
    if (!username) return;

    signIn(username);
  };

  return (
    <View className="mx-auto w-full max-w-md flex-1 items-center justify-center bg-white">
      <Text className="mb-5 text-2xl">Sign in</Text>
      <TextInput
        className="mb-4 h-10 w-4/5 rounded border border-gray-300 px-2.5"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
}
