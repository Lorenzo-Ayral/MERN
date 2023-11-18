import './App.css'
import {Routes, Route} from "react-router-dom";
import Layout from "./assets/components/Layout.jsx";
import Public from "./assets/components/Public.jsx";
import Login from "./assets/components/Login.jsx";

function App() {
  return (
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Public/>}/>
              <Route path={login} element={<Login/>}/>
            </Route>
        </Routes>
  )
}

export default App
