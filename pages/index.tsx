import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/Section/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Albert Dugba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Hero />
        <About />
      </motion.main>
    </>
  );
}
