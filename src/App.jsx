import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './store/userSlice'
import { initTheme } from './store/themeSlice'
import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import Introduction from "./components/Introduction/Introduction"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {

  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.mode)

  useEffect(() => {
    dispatch(initTheme())
    dispatch(fetchUser())
  }, [dispatch])


  return (
    <>
      <div className={`wrapper ${theme}`}>
        <div className="container">
          <Navbar/>
          <main>
            <Introduction/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App