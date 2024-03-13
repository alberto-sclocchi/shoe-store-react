import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShoeService from '../shoes/service/ShoeService';

export default function ShoeDetails() {
  const { shoeId } = useParams();
  const service = new ShoeService();
  const [ shoe, setShoe ] = useState();

  const getShoe = async () => {
    const shoeDB = await service.getShoe(shoeId);
    setShoe(shoeDB);
  }

  useEffect(()=>{
    getShoe();
  }, [])


  return (
    <div>
        <h1>Shoe Detail</h1>
        {!!shoe &&
            <div className="shoe-details">
                <img src={shoe.img} alt={shoe.name}/>
                <h3>{shoe.name}</h3>
                <span><b>Model:</b> {shoe.model}</span>
                <span><b>Size:</b> {shoe.size}</span>
                <p>{shoe.inStock ? "In Stock" : "Not Available"}</p>
            </div>
        }
    </div>
  )
}
