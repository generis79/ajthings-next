import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Header from '../components/Header';
import Products from '../components/Products';
import Hero from '../components/Hero';
import 'tw-elements';

export default function Home({products}) {

  return (
    <div>
      <Head>AJ things</Head>
      <meta name='keywords' content='portfolio, retail' />
        
        <Header />
        <Hero />
        <Products products = {products}/>
    </div>
  )
}

export async function getStaticProps() {
  // get files from product dir
  const files=fs.readdirSync(path.join('products'))
  
  // get slug from frontmatter
  const products = files.map(filename=>{
    const slug = filename.replace('.md','')
    const markdownWithMeta = fs.readFileSync(path.join('products',filename), 'utf-8')
    const {data: frontmatter} = matter(markdownWithMeta)

   
    return {
      slug,
      frontmatter,
    }
  
  })

  return {
    props: {
      products: products
    }
  }
}
