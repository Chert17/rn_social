import { FeedPostItem } from '@/components/FeedPostItem';
import { FlatList, Pressable, View } from 'react-native';

import { Post } from '@/types';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');

      const data = await response.json();
      setPosts(data.posts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <View className="flex-1 justify-center">
        <FlatList
          data={posts}
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
