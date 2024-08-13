import React from "react"
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics"
import Header from "./shared/Header/Header"
import Popup from "./shared/Popup/Popup"

function App() {
  return (
    <div className='global__container'>
      <Popup />
      <div className='App container'>
        <Header />
        <Routes>
          <Route
            path='/'
            Component={Home}
          />
          <Route
            path='month-statistics'
            Component={MonthStatistics}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
