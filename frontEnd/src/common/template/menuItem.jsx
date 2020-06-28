import React from 'react'


export default props =>(
    <li>
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i><samp> {props.label}</samp>
        </a>

    </li>
)