import React from 'react';
import {
    BrowserRouter, Route, Switch
} from "react-router-dom";
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Services from '../pages/Services/Services';
import Footer from './Footer';
import Header from './Header';

const Master = () => {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/services">
                        <Services></Services>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="*">
                        <PageNotFound></PageNotFound>
                    </Route>
                </Switch>

            </BrowserRouter>


            <Footer></Footer>
        </div>
    );
};

export default Master;