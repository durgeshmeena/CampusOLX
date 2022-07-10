import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import CreatePost from '../Pages/CreatePost'
import ViewPost from '../Pages/ViewPost'
import ViewMore from '../Pages/ViewMore'
import PageAuth from '../Pages/PageAuth'
import Back from '../Pages/Back'
import Chat from '../Components/Chat/Chat'
// import Chat from '../NewUI/Chat/Chat'

import Admin from '../Pages/Admin'

function MainRoutes() {
    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />             
                <Route path="/signup" element={<Signup/>} />               
                <Route path="/login" element={<Login/>} />              
                <Route path="/create" element={<CreatePost/>} />
                <Route path="/view" element={<ViewPost/>} />
                <Route path="/viewmore" element={<ViewMore/>} />
                <Route path="/auth" element={<PageAuth/>} />
                <Route path="/back" element={<Back/>} />             
                <Route path="/chat" element={<Chat/>} />             
                <Route path="/admin" element={<Admin/>} />   


            </Routes>
        </Router>
       
    )
}

export default MainRoutes
