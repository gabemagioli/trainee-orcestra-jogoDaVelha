import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Jogo from './jogo/Jogo'
import { PaginaInicial } from './pagina-inicio/PaginaInicial'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial/>}/>
          <Route path="/jogo" element={<Jogo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
