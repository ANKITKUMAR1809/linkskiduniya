import React from 'react'
import './Links.css'
export const Links = (props) => {
    return (
        <a href={props.link} target='_blank' >
            <div className="links">
                <div className="links_logo"><img src={props.logo} alt="" /></div>
                <div className="name">{props.name}</div>
                <div className="date">{props.date}</div>
            </div>
        </a>
    )
}
