import React, { useContext, useState } from "react";
import ShoeService from "./service/ShoeService";
import { useNavigate } from "react-router-dom";
import ShoeContext from "./context/ShoeContext.context";

export default function ShoeForm() {

  const service = new ShoeService()
  const navigateTo = useNavigate();
  const {addNewShoe} = useContext(ShoeContext)

  const [shoe, setShoe] = useState({
    name: " ",
    model: " ",
    img: " ",
    size: " ",
    inStock: false
  })

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const shoeCreated = await service.createShoe(shoe);
    addNewShoe(shoeCreated);
    // console.log({shoeAdded: shoeCreated});


    setTimeout(()=>{
        setShoe({
            name: " ",
            model: " ",
            img: " ",
            size: " ",
            inStock: false
        })
    }, 1);

    navigateTo(`/${shoeCreated._id}`);
    
  };

  const handleChange = (event) => {
    console.log({[event.target.name]: event.target.value})
    setShoe((prevState) => (
        {...prevState, [event.target.name]: event.target.value}
    ))
  };

  const handleChecked = (event) => {
    console.log({[event.target.name]: event.target.checked})
    setShoe((prevState) => (
        {...prevState, [event.target.name]: event.target.checked}
    ))

  }

  return (
    <form onSubmit={handleSubmit} className="shoe-form">
        <label>
            Name{" "}
            <input name="name" type="text" value={shoe.name} onChange={handleChange}></input>
        </label>

        <label>
            Model{" "}
            <input name="model" type="text" value={shoe.model} onChange={handleChange}></input>
        </label>

        <label>
            URL{" "}
            <input name="img" type="text" value={shoe.img} onChange={handleChange}></input>
        </label>

        <label>
            Size{" "} 
            <input name="size" type="text" value={shoe.size} onChange={handleChange}></input>
        </label>

        <label>
            In Stock{" "} 
            <input name="inStock" type="checkbox" checked={shoe.inStock} onChange={handleChecked}></input>
        </label>

        <button>Add Shoe</button>
    </form>
  )
}
