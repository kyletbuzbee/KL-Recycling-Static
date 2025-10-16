// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { allPosts } from "../../data/posts";
import { BlogPost, SanityPortableText } from "@/types/content";

function BlockContent({ blocks }: { blocks: SanityPortableText[] }) {
  return (
    <div>
      {blocks.map((block, index) => {
        if (block._type === "block" && block.children) {
          return (
            <p key={index}>
              {block.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          );
        }
        if (block._type === "image" && block.asset?.url) {
          const altText = typeof block.alt === "string" ? block.alt : "";
          return (
            <div key={index} className="relative my-8 h-96">
              <Image src={block.asset.url} alt={altText} fill className="rounded-lg object-cover" />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allPosts.map((post) => ({ params: { slug: post.slug.current } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p.slug.current === params!.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const PostPage: NextPage<{ post: BlogPost }> = ({ post }) => (
  <Layout>
    <SEO title={`${post.title} | Blog | K&L Recycling`} description={post.excerpt || post.title} image={post.mainImage?.asset?.url} />

    <article className="prose mx-auto py-20 px-6 lg:prose-lg">
      <header className="mb-8 text-center">
        <h1 className="mb-2 font-extrabold">{post.title}</h1>
        <time className="text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</time>
        {post.mainImage?.asset?.url && (
          <div className="relative mt-6 mx-auto h-64 w-full">
            <Image src={post.mainImage.asset.url} alt={post.title} fill className="rounded-lg object-cover" />
          </div>
        )}
      </header>

      {post.body && <BlockContent blocks={post.body} />}
    </article>
  </Layout>
);

export default PostPage;
