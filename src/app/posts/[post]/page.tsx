import { existsSync } from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "src", "posts");

interface Props {
  params: {
    post: string;
  };
}

export default async function PostPage({ params }: Props) {
  const filepath = path.join(POSTS_DIR, `${params.post}.mdx`);
  if (!existsSync(filepath)) {
    throw new Error("Post not found");
  }
  const relativePath = path.relative(POSTS_DIR, filepath);
  const { default: MDXContent, frontmatter } = await import(
    `../../../posts/${relativePath}`
  );
  // console.log(frontmatter);
  return <MDXContent />;
}
