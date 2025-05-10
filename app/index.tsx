import { FeedPostItem } from '@/components/FeedPostItem';
import { FlatList, View } from 'react-native';

import { dummyPosts } from '@/mock';

export default function Home() {
  return (
    <>
      <View className="flex-1 justify-center">
        <FlatList
          data={dummyPosts}
          className="bg-white"
          renderItem={({ item }) => <FeedPostItem post={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
}
