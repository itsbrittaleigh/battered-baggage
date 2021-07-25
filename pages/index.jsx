import Head from 'next/head';
import { getAllPostsForHome } from '../lib/api';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Battered Baggage | A Travel Blog</title>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya&family=Karla&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Container>
          <h1 className="hero--home">Battered Baggage is a travel blog and mental health manifesto.</h1>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];

  return {
    props: { preview, allPosts },
  };
}
