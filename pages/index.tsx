import Head from 'next/head';
import Landing from '@/landing/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Albert Dugba</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Albert Dugba - Portfolio & Personal Website" content="Albert Dugba - Portfoio & Personal Website" />
        <meta property="og:title" content="Official webiste of Albert Dugba" />
      </Head>
      <Landing />
    </>
  );
}
