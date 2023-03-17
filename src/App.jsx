import { useState } from 'react'
import Quiz from './components/Quiz/Quiz'
import logo from './assets/react.svg'

function App() {
  return (
    <div className='home-page'>
      <div className='home-page-header'>
        <img className='home-page-header__img' src={logo} alt="React"/>
        <h1 className='home-page-header__title'>React Quiz</h1>
      </div>
      <Quiz/>
    </div>
  )
}

export default App
