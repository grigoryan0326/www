// import React, { useEffect, useState } from "react"
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
// import ThemeContext from "./context/ThemeContext"
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics"
import Header from "./shared/Header/Header"
import { ThemeProvider } from "./provider/ThemeProvider"
// import Popup from "./shared/Popup/Popup"

function App() {
  return (
    <ThemeProvider>
      <div className='global__container'>
        {/* <Popup /> */}
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
    </ThemeProvider>
  )
}

export default App
