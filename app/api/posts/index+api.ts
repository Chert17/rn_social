import { dummyPosts } from '@/mock';

export async function GET(request: Request) {
  const posts = dummyPosts;

  return Response.json({ posts });
}

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    const post = {
      id: 'new',
      content,
      user_id: 'user_id',
    };

    return new Response(JSON.stringify(post), { status: 201 });
  } catch (error) {
    return new Response('Error inserting post', { status: 500 });
  }
}
