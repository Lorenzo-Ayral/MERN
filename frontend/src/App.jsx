import './App.css'
import {Routes, Route} from "react-router-dom";
import Layout from "./assets/components/Layout.jsx";
import Public from "./assets/components/Public.jsx";
import Login from "./assets/features/auth/Login.jsx";
import DashLayout from "./assets/components/DashLayout.jsx";
import Welcome from "./assets/features/auth/Welcome.jsx";
import NotesList from "./assets/features/notes/NotesList.jsx";
import UsersList from "./assets/features/users/UsersList.jsx";

function App() {
  return (
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Public/>}/>
                <Route path="login" element={<Login/>}/>

                <Route path="dash" element={<DashLayout/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path="notes">
                        <Route index element={<NotesList/>}/>
                    </Route>
                    <Route path="users">
                        <Route index element={<UsersList/>}/>
                    </Route>
                </Route>

            </Route>
        </Routes>
  )
}

export default App
