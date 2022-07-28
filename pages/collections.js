import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from 'react'
import Collections from "../components/Collections";
import Header from "../components/Header";

const collections = ({ collections }) => {
  return (
    <div>

      <Collections collections={collections} />
    </div>
  )
}

export default collections

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