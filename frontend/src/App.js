import React from 'react';
import { BrowserRouter as BR, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SharedLayouts from './pages/SharedLayouts';
import PrivateRoute from './components/PrivateRoute';
import StartCampaign from './intro/StartCampaign'
import Profile from './pages/Profile';
import Crossroad from './pages/countries/Crossroad';
import MagicalForest from './pages/countries/MagicalForest';
import Cave from './pages/countries/Cave';
import Battleground from './pages/Battleground';
import MyBox from './pages/UserPages/MyBox';


const App = () => {
    return(
        <BR>
            <Routes>
                <Route path="/" element={<SharedLayouts/>}>
                    <Route index element={<Home/>} />
                    <Route path='/Login' element={<Login />}/>
                    <Route path= '/Register' element={<Register />}/>                   
                    <Route element={<PrivateRoute/>}>
                        <Route path='/start' element={<StartCampaign />}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/crossroad' element={<Crossroad/>} />
                        <Route path='/magicalforest' element={<MagicalForest/>}/>
                        <Route path='/cave' element={<Cave />}/>
                        <Route path='/battle' element={<Battleground />} />
                        <Route path='/mybox' element={<MyBox/>} />
                    </Route>
                </Route>
                
            </Routes>
        
        </BR>
    )
}
export default App