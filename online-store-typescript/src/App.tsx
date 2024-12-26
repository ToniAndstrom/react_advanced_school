import './App.css'
import StoreNavbar from './components/StoreNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './components/List'

function App() {

  return (
    <div>
      <StoreNavbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
