import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from 'react'
import CollectionProducts from "../../components/CollectionProducts";
import Header from "../../components/Header";

const wri = ({ products }) => {
  return (
    <div>
          <h2 className="font-medium leading-tight text-4xl p-10 mt-20 mb-0 text-gray-700 bg-white text-center font-Caveat">
            <div className='flex flex-col'>
                <div >
                  Wristles
                </div>

            </div>
         </h2>
      <CollectionProducts products={products} />
    </div>
  )
}

export default wri

export async function getStaticProps() {
  // get files from collections dir
  const files = fs.readdirSync(path.join("products/wristles"));

  // get slug from frontmatter
  const products = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("products/wristles", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });


    // // get files from collections dir
    // const coll_files = fs.readdirSync(path.join("collections"));

    // // get slug from frontmatter
    // const collections = files.map((filename) => {
    //   const slug = filename.replace(".md", "");
    //   const markdownWithMeta = fs.readFileSync(
    //     path.join("collections", filename),
    //     "utf-8"
    //   );
    //   const { data: frontmatter } = matter(markdownWithMeta);
  
    //   return {
    //     slug,
    //     frontmatter,
    //   };
    // });

  return {
    props: {
      products: products,
     // collection: collections
    },
  };
}