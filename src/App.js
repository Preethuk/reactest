
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Question1 from './Components/QUESTION1/Question1'
import Question2 from './Components/QUESTION2/Question2'
import Question3 from './Components/QUESTION3/Question3'
import Child from './Components/QUESTION4/Child'
import Parent from './Components/QUESTION4/Parent'


function App() {
  return (
    <div>
      <Header/>
     
       <Routes>
  <Route path='/' element={ <Home />} />
  <Route path="/page" element={<Question1/>}/>
  <Route path="/toggle" element={<Question2/>}/>
  <Route path="/login" element={<Question3/>}/>
  <Route path='/task' element={<Child/>}/>

  
    </Routes>
    {/* <Footer/> */}
    </div>
  )
}

export default App