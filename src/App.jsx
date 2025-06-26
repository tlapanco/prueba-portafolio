import BarraNavegacion from "./componentes/BarraNavegacion"
import Banner from "./componentes/Banner"
import Skills from "./componentes/Skills"
import Proyectos from "./componentes/Proyectos"
import Contacto from "./componentes/Contacto"
import Footer from "./componentes/Footer"

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <BarraNavegacion />
    <Banner />
    <Skills />
    <Proyectos />
    <Contacto />
    <Footer />
    </>
  )
}

export default App
