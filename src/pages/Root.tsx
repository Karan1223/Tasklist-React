import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "../context/ThemeContext"

const Root = () => {
  return (
    <div>
     <ThemeProvider>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
      </ThemeProvider>
    </div>
  )
}

export default Root