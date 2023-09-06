import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import LessonList from "./LessonList";
import Es from "./Es";
import Th from "./Th";
import EsGreetingsGratitudesEtc from "./lessons/EsGreetingsGratitudesEtc"

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <>
        <Router>
            <div className="container-fluid" id="nav-container">
                    <ul className="navbar-nav">
                        <Link to="/"><li className="lefty"><h1 id="logo">Lingogrind</h1></li></Link>
                        <li className="righty"><h5>About</h5></li>
                    </ul>
            </div>
            <div className="container-fluid">
                <Routes>
                    <Route index element={ <HomePage /> } />
                    <Route exact path="/es" element={ <Es /> } />
                    <Route exact path="/th" element={ <Th /> } />
                    <Route exact path="/EsGreetingsGratitudesEtc" element={ <EsGreetingsGratitudesEtc /> } />
                </Routes>
            </div>
        </Router>
        </>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);