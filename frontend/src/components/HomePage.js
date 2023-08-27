import React, { Component } from 'react';
import Th from "./Th";
import Es from "./Es";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <p>This is the home page</p>
                    } />
                    <Route exact path="/es" element={ <Es /> } />
                    <Route exact path="/th" element={ <Th /> } />
                </Routes>
            </Router>
        );
    }
}