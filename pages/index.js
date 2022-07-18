import Head from 'next/head'
import Header from '../components/Header';
import Products from '../components/Products';
import Hero from '../components/Hero';
import 'tw-elements';

export default function Home() {
  return (
    <div>
      <Head>AJ things</Head>
      <meta name='keywords' content='portfolio, retail' />
        
        <Header />
        <Hero />
        <Products />
    </div>
  )
}
