import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


const layout = () => {
  return (
    <>
    <Header/>
    <main className="pb-20">
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default layout
