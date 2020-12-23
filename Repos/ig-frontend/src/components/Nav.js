import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => (
    <div className="Nav">
        <NavLink to="/" exact>Home</NavLink>
        <br></br>
        <NavLink to="/create" exact>Create</NavLink>
    </div>
)