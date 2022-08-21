import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './pages/Inicial/Inicial'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicial/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
