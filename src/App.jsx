
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Hospitalform from './Components/Hospitalform'
import PatientDetails from './Components/PatientDetails'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import UpdateForm from './Components/UpdateForm'
import Service from './Components/Service'
import Doctors from './Components/Doctors'

function App() {


  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    <Route path='/hospitalform' element={<Hospitalform/>}/>
       <Route path='/services' element={<Service/>}/>
          <Route path='/doctor' element={<Doctors/>}/>
        <Route path='/patientdetails' element={<PatientDetails/>}/>
        <Route path='/updateform/:id' element={<UpdateForm/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
