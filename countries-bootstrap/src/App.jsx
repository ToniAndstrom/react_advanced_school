import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./components/Home"
import ErrorPage from "./components/Errorpage"
import Countries from "./components/Countries"

function App() {
  

  return (
  
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
      {/*This is where the other routes will go to allow the Layout to be visible*/}
    <Route path="/" element = {<Home/>}/>
    <Route path="/countries" element = {<Countries/>}/>
    <Route path="*" element = {<ErrorPage/>}/>
    
   
  </Route>
</Routes>
</BrowserRouter>
    
  )
}

export default App
