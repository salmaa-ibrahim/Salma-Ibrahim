import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react"
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import About from './pages/about/about';
import Experiance from './pages/experiance/experiance';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
export const ThemeContext = createContext(null)
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
    <div className={theme +"App"}>
      <ThemeContext.Provider value={{theme , setTheme}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='experiance' element={<Experiance />}></Route>
          <Route path='projects' element={<Projects />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      </ThemeContext.Provider>
    </div>
    </>
  )
}

export default App
