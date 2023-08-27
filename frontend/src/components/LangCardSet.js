import { Fragment } from "react";
import { Link } from "react-router-dom"

function LangCardSet() {
    let langs = [{name:"Thai", abbr:"th"}, {name:"Spanish", abbr:"es"}]; //Move to homepage and pass as prop
    return (
        <>
        { langs.map(lang => (
            <Link to={ lang.abbr }>
                <div className="card" id="langcard">
                    <img className="card-img-top" src={"../static/images/"+lang.name.toLowerCase()+"-flag.png"} alt="Card image cap" />
                    <div className="card-body">
                        <center><h2>{ lang.name }</h2></center>
                    </div>
                </div>
            </Link>)) }
        </>
    )
}

export default LangCardSet;