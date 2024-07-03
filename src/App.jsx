
import './App.css'
import Contract from './Contract'
import Footer from './Footer'
import Header from './Header'
import MyEducation from './MyEducation'
import MySkills from './MySkills'
import MyWorks from './MyWorks'
import Navbar from './Navbar'

function App() {
  

  return (
 <div className='bg-primary-gradient h-screen'>
  <Navbar></Navbar>
  <Header></Header>
  <MySkills></MySkills>
  <MyWorks></MyWorks>
  <MyEducation></MyEducation>
  <Contract></Contract>
  <Footer></Footer>
 </div>
  )
}

export default App
