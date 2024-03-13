import React, { useContext, useEffect, useState } from "react";
import InfoBox from './InfoBox'
import ShoeService from "./service/ShoeService";
import ShoeContext from "./context/ShoeContext.context";

export default function ShoeStore() {
  const displayTypeArray = ["All", "In Stock", "Not Available"];

  const { shoesArray, getShoes } = useContext(ShoeContext);

  // const [displayForm, setDisplayForm] = useState(false)

  useEffect(()=> {
    getShoes();
  }, [])

  

  // const toggleForm = () =>{
  //   console.log(displayForm);
  //   setDisplayForm(!displayForm);
  // }

  const displayInfoBox = (displayType) => {
    return shoesArray.map((shoe) => {
 
        if (!!displayType && displayTypeArray.includes(displayType) && displayType !== displayTypeArray[0]){
            
            if(displayType === displayTypeArray[1] && shoe.inStock){
                return <InfoBox key={shoe._id} {...shoe} />;
            }

            if(displayType === displayTypeArray[2] && !shoe.inStock){
                return <InfoBox key={shoe._id} {...shoe}/>;
            }
        } 

        return <InfoBox key={shoe._id} {...shoe} />;

    });
  }


  return (
    <div className="shoe-container">
      {!!shoesArray.length ? displayInfoBox(displayTypeArray[0]) : "No Shoes"}
    </div>
  )
}

