import React from 'react'

import './App.css';
import { Navbar, Header, Join, About, Meetings, Events, Team, Contact, Footer } from './containers';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <Join />
        <About />
        <Meetings />
        <Events />
        <Team />
        <Contact />
        <Footer />
    </div>
  )
}

export default App