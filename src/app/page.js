import styles from './page.module.css'
import Navbar from './components/Navbar/Index'
import Cont from './components/Cont/Index'
import Footer from './components/Footer/Index'
import Main from './components/Main/Index'

export default function Home(){
  return (
    <div>
      <Navbar />
      <Cont/>
      <Main/>
    </div>
  )
}
