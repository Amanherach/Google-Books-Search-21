import React from 'react'


export default function JumboTron(props) {

    return (
        <div className="jumbotron">
           
            <img className="jumbotron-image" alt={props.heading} src={props.jumboImage}></img>
            <h2 className="jumbotron-heading">{props.heading}</h2>
            <p className="jumbotron-subheading">By {props.author}</p>

        </div>
    )
}
