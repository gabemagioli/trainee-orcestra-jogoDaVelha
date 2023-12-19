import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Jogo from './jogo/Jogo'
import { PaginaInicial } from './pagina-inicio/PaginaInicial'
import Jogo from "./jogo/Jogo"

function App() {

  return (
    <>
<<<<<<< HEAD
      <PaginaInicial/>
      <Jogo/>
=======
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaInicial/>} />
            <Route path="/jogo" element={<Jogo/>}/>
        </Routes>
      </BrowserRouter>
>>>>>>> 24da14761fcc4297a812d8efbfcd3f3b9505c6de
    </>
  )
}

export default App
