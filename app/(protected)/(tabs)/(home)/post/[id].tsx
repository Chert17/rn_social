import { FeedPostItem } from '@/components/FeedPostItem';
import { dummyPosts } from '@/mock';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function DetailPost() {
  const { id } = useLocalSearchParams();

  const post = dummyPosts.find((i) => i.id === +id);

  if (!post) {
    return <Text>Post Not Found</Text>;
  }

  return <FeedPostItem post={post} />;
}
