import Layout from '../components/Layout'
import '../styles/globals.css'
import Amplify from 'aws-amplify';
import aws_exports from '../src/aws-exports';
import { useState } from 'react'
Amplify.configure(aws_exports);

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState([])

//add item
  const addItem = (item) =>{
    console.log(item)
    setItems([...items, item.frontmatter])
  }

//delete cart item
  const deleteItem = (id) =>{
    setItems(items.filter((item) => item.id !==id))
  }


  return (
    <Layout>
      <Component {...pageProps} items= {items} onDelete={deleteItem} onAdd={addItem}/>
    </Layout>
  )
}

export default MyApp
