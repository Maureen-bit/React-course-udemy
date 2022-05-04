import React from 'react'
import { Link, NavLink } from "react-router-dom";
/*NavLink: nos permite ver que ruta está activa en este momento si la URL coincide exactamente con el path */

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>UseContext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink exact='true' className="nav-link" to='/'>Home</NavLink>
                <NavLink exact='true' className="nav-link"  to='/about'>About</NavLink>
                <NavLink exact='true' className="nav-link"  to='/login'>Login</NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}
