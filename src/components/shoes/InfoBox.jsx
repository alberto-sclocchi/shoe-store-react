import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoBox({name, model, img, size, inStock, _id}) {
  return (
    <div className="info-box">
        <Link to={`/${_id}`}><h3>{name}</h3></Link>
        <img src={img} alt={name}/>
        <span><b>Model:</b> {model}</span>
        <span><b>Size:</b> {size}</span>
        <p>{inStock ? "In Stock" : "Not Available"}</p>
    </div>
  )
}
