import React from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import ViewPost from '../Pages/ViewPost'
import ViewMore from '../Pages/ViewMore'
// import PageAuth from '../Pages/PageAuth'
import Admin from '../Pages/Admin'
import NotFound from '../Components/NotFound/NotFound'
import Sell from '../Components/Sell/Sell'
import Product from '../Components/Product/Product'
// import MyProducts from '../Components/MyProducts/MyProducts'

function MainRoutes() {
    return (
       <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                
                <Route path="/view">
                    <ViewPost/>
                </Route>
                <Route path="/viewmore">
                    <ViewMore/>
                </Route>
                {/* <Route path="/auth">
                    <PageAuth/>
                </Route> */}
                
                
                <Route path="/admin">
                    <Admin/>
                </Route>
                <Route path="/create/seller">
                    <Sell/>
                </Route>
                <Route path="/create/product">
                    <Product/>
                </Route>

                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>       
       </Router>
    )
}

export default MainRoutes
