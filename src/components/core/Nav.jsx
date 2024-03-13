import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <Link to="/" className="button">Shoes</Link>
        <Link to="/add-shoe" className="button">Add Shoe</Link>
    </nav>
  )
}
