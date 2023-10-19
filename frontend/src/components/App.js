import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Es from "./Es";
import Th from "./Th";
import About from "./About";
import LessonComponentLoader from './LessonComponentLoader';
import Login from './Login'
import EsGreetingsGratitudesEtc from "./lessons/EsGreetingsGratitudesEtc";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/get-lsn?lang=es")
        .then((response) => response.json())
        .then((responseData) => {
            setData(responseData);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <>
        <Router>
            <div className="container-fluid" id="nav-container">
                <ul className="navbar-nav">
                    <li className="lefty">
                        <Link to="/">
                            <h1 id="logo">Lingogrind</h1>
                        </Link>
                    </li>
                    <li className="righty">
                        <Link to="/about">
                            <h5>About</h5>
                        </Link>
                    </li>
                    <li className="righty">
                        <Link to="/login">
                            <h5>Log In</h5>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="container-fluid">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/es" element={<Es />} />
                    <Route path="/th" element={<Th />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    { data.map( (lsn) =>
                <Route
                key={lsn.file}
                path={`/${lsn.file}`}
                element={<LessonComponentLoader componentName={lsn.file} />}
              />
            )}
                </Routes>
            </div>
        </Router>
        </>
    );
}

export default App;