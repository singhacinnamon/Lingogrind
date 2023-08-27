import React, { Component } from 'react';
import LangCardSet from "./LangCardSet";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div class="jumbotron text-center">
                <center>
                    <h1 class="title">Lingogrind</h1>
                    <p>
                    Learning a new language can be a daunting task, and each language presents its own unique challenges. 
                    Lingogrind caters practice tools that enable mastery over specific skills integral to each language. 
                    Pick a language down below to see what skill games are available!
                    </p>
                </center>
            </div>
            <center>
                <LangCardSet />
            </center>
            </>
        );
    }
}