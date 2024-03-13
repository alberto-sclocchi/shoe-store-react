import axios from "axios";

export default class ShoeService {
    constructor(){
        let service = axios.create({
            baseURL: "http://localhost:5005/api/shoes"
        })

        this.service = service;
    }

    getAllShoes(){
        return this.service.get("/").then((resp) =>  resp.data.data);
    }

    createShoe(shoe){
        return this.service.post("/", {shoe}).then((resp) => resp.data.data);
    }

    getShoe(shoeId){
        return this.service.get(`/${shoeId}`).then((resp) =>  resp.data.data);
    }
}