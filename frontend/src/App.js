import React from 'react';
import { BrowserRouter as BR, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SharedLayouts from './pages/SharedLayouts';
import PrivateRoute from './components/PrivateRoute';
import Secrets from './pages/Secrets';

const App = () => {
    return(
        <BR>
            <Routes>
                <Route path="/" element={<SharedLayouts/>}>
                    <Route index element={<Home/>} />
                    <Route path='/Login' element={<Login />}/>
                    <Route path= '/Register' element={<Register />}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path='/secrets' element={<Secrets />}/>
                    </Route>
                </Route>
                
            </Routes>
        
        </BR>
    )
}
export default App