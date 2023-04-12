import TopDiv from "./TopDiv"
import Navbar from "./Navbar"
import Footer from "./Footer"

type Props = {
  children: React.ReactNode
  isTopOfPage: boolean
}

const Layout = ({ children, isTopOfPage }: Props) => {

  return (
    <section>
      <TopDiv />
      <Navbar 
        isTopOfPage={isTopOfPage}
      />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </section>
  )
}

export default Layout