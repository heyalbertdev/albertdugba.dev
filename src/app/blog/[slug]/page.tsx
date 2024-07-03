import Image from "next/image";
import { notFound } from "next/navigation";

import { PostBody } from "~/components/posts/post-body";
import { Title } from "~/components/title";
import { getPost } from "~/lib/posts";

async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  console.log({ post });

  if (!post) return notFound();

  return (
    <div className='min-h-screen w-full items-center justify-center lg:mt-24 md:py-16 py-14'>
      <div>
        <Title title={post.title} />
        <div className='flex p-2 gap-2'>
          <span>{post.date}</span>
          <ul className='flex gap-2 mb-6'>
            {post?.tags?.map((tag, i) => (
              <li
                className='list-none text-sm border border-secondary px-2.5 py-0.5 bg-secondary text-primary rounded-lg'
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className='relative shadow-2xl lg:h-[500px] h-[300px] my-8'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-fill rounded-xl'
          />
        </div>

        <PostBody>{post?.body}</PostBody>
      </div>
    </div>
  );
}

export default PostPage;
