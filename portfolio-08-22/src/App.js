import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Works from "./components/Works/Works.jsx"
import Contacts from "./components/Contacts/Contacts.jsx"
import "./styles/App.scss"

function App() {
  return (
    <div className='document-wrapper'>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/works'
            element={<Works />}
          />
          <Route
            path='/contacts'
            element={<Contacts />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
