import Layout from '../components/Layout'
import '../styles/globals.css'
import Amplify from 'aws-amplify';
import aws_exports from '../src/aws-exports';

Amplify.configure(aws_exports);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
