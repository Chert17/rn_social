import { Post } from '@/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC } from 'react';
import { Image, Text, View } from 'react-native';

dayjs.extend(relativeTime);

type FeedPostItemProps = {
  post: Post;
};

export const FeedPostItem: FC<FeedPostItemProps> = ({ post }) => {
  return (
    <View className="flex-row gap-3 border-b border-b-gray-200 p-4">
      <Image source={{ uri: post.author.avatar }} className="size-12 rounded-full" />

      <View className="flex-1 gap-2">
        <View className="flex-row gap-1">
          <Text className="font-semibold">{post.author.name}</Text>
          <Text className="text-gray-500">{post.author.handle}</Text>
          <Text className="text-gray-500">·</Text>
          <Text className="text-gray-500">{dayjs(post.created_at).fromNow(true)}</Text>
        </View>

        <Text className="leading-5">{post.content}</Text>

        <View className="flex-row gap-5">
          <View className="flex-row items-center gap-1">
            <MaterialCommunityIcons name="message-outline" size={20} color="gray" />
            <Text className="text-gray-500">{post.replies_count}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <MaterialCommunityIcons name="repeat" size={20} color="gray" />
            <Text className="text-gray-500">{post.retweets_count}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <MaterialCommunityIcons
              name={post.is_liked ? 'heart' : 'heart-outline'}
              size={20}
              color={post.is_liked ? 'crimson' : 'gray'}
            />
            <Text className="text-gray-500">{post.likes_count}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
