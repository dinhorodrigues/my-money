import React from 'react'
import { Link } from 'react-router'


export default props => (
    <li>
      
        <Link to={props.path}>
        <i className={`fa fa-${props.icon}`}></i><samp>{props.label}</samp>
        </Link>

    </li>
)