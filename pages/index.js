import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Header from "../components/Header";
import Collections from "../components/Collections";
import Testimonials from "../components/Testimonials";

import Hero from "../components/Hero";
import "tw-elements";

export default function Home({ collections }) {
  return (
    <div>
      <Head>AJ things</Head>
      <meta name="keywords" content="portfolio, retail" />

      <Header />
      <Hero />
      <Collections collections={collections} />
      <Testimonials />
    </div>
  );
}

export async function getStaticProps() {
  // get files from collections dir
  const files = fs.readdirSync(path.join("collections"));

  // get slug from frontmatter
  const collections = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("collections", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      collections: collections,
    },
  };
}
