import { FeedPostItem } from '@/components/FeedPostItem';
import { Button, FlatList, View } from 'react-native';

import { dummyPosts } from '@/mock';
import { useAuth } from '@/providers';
import { Link } from 'expo-router';

export default function Home() {
  const { signOut } = useAuth();

  return (
    <>
      <View className="flex-1 justify-center">
        <FlatList
          data={dummyPosts}
          className="bg-white"
          renderItem={({ item }) => (
            <Link
              href={{ pathname: '/(protected)/(tabs)/(home)/post/[id]', params: { id: item.id } }}>
              <FeedPostItem post={item} />
            </Link>
          )}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<Button title="SignOut" onPress={signOut} />}
        />
      </View>
    </>
  );
}
