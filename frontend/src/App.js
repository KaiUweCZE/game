import React from 'react';
import { BrowserRouter as BR, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SharedLayouts from './pages/SharedLayouts';
import PrivateRoute from './components/PrivateRoute';
import StartCampaign from './intro/StartCampaign'
import Profile from './pages/Profile';
import Battleground from './pages/Battleground';
import MyBox from './pages/UserPages/MyBox';
import Map from './pages/Map';
import NPC from './pages/NPC'
import ActionNPC from './pages/subPages/ActionNPC';
import ActionPokemon from './pages/subPages/ActionPokemon';
import Explore from './pages/Explore';
import Mail from './pages/Mail';



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
                        <Route path='/onroad' element={<Explore/>} />
                        <Route path='/battle' element={<Battleground />} />
                        <Route path='/mybox' element={<MyBox/>} />
                        <Route path='/map' element={<Map/>} />
                        <Route path="/npc" element={<NPC/>}/>
                        <Route path="/npc/:id" element={<ActionNPC />} />
                        <Route path='/pokemon/:id' element={<ActionPokemon />}/>
                        <Route path="/mail" element={<Mail />}/>
                    </Route>
                </Route>
                
            </Routes>
        
        </BR>
    )
}
export default App