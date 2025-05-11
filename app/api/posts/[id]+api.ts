import { dummyPosts } from '@/mock';

export async function GET(request: Request, { id }: { id: string }) {
  const post = dummyPosts.find((p) => p.id === +id);

  if (!post) {
    return Response.json({ error: 'Post not found' }, { status: 404 });
  }

  return Response.json(post);
}
