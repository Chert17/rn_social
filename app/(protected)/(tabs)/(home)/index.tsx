import { FeedPostItem } from '@/components/FeedPostItem';
import { FlatList, Pressable, View } from 'react-native';

import { dummyPosts } from '@/mock';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Home() {
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
        />

        <Link href="/new" asChild>
          <Pressable className="absolute bottom-5 right-5 h-[60px] w-[60px] items-center justify-center rounded-full bg-[#007AFF] shadow-lg">
            <AntDesign name="plus" size={24} color="white" />
          </Pressable>
        </Link>
      </View>
    </>
  );
}
