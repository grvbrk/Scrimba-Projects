import React from 'react'

export default function Options(props){
    return (
        <p className="options" onClick={props.handleClick}>{props.option}</p>
    )
}