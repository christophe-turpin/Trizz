import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import QuizSetup from './components/QuizSetup'
import FixedMenuLayout from './components/NavBar'
import Article from './components/Articles'
import AboutUs from './components/AboutUs'
import Maps from './components/Maps'
import Footer from './components/Footer'


class Router extends React.Component {
    render() {

        return (
            <>
                <FixedMenuLayout />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/quiz" component={QuizSetup} />
                    <Route path="/articles" component={Article} />
                    <Route path="/aboutUs" component={AboutUs} />
                    <Route path="/maps" component={Maps} />
                </Switch>
                <Footer />
            </>
        );
    }
}
export default Router 
