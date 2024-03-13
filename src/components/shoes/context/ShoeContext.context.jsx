import React, { createContext, useState } from "react";
import ShoeService from "../service/ShoeService";

const ShoeContext = createContext({});
const service = new ShoeService();

export const ShoeProvider = ({ children }) => {
	const [shoesArray, setShoesArray] = useState([]);

    const addNewShoe = (shoe) =>{
        setShoesArray((prevState) => [...prevState, {...shoe}])
      }


	const getShoes = async () => {
		const shoesDB = await service.getAllShoes();
		setShoesArray(shoesDB);
	}

	const data = {shoesArray, getShoes, addNewShoe };

	return (
		<ShoeContext.Provider value={{ ...data }}>
			{children}
		</ShoeContext.Provider>
	);
};

export default ShoeContext;