import { Route, Routes, BrowserRouter } from "react-router-dom"

import routesConfig from "@routes/routesConfig.js"
import Header from "@components/Header/Header"

import styles from "./App.module.scss"

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
