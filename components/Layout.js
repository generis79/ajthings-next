import Nav from './Nav'
import Footer from './Footer'


const Layout = ({children}) => {

  return (
    <div className="flex flex-col h-screen">
      <Nav />
        {children}
      <Footer />
    </div>
  )
}

export default Layout