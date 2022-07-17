import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Products from "./Products"


const Layout = ({children}) => {
  return (
    <>
      <Nav />
      <Header />
      <div >
          <Products />
              {children}
      </div>
    </>
  )
}

export default Layout