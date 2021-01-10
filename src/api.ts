import axios from "axios";
import { OrderPayload } from "./Orders/types";

const API_URL = 'http://localhost:8080';
const mapboxToken ='pk.eyJ1IjoiYnRvbGVkbyIsImEiOiJja2pybnJ0bHMxdWVoMzFseTdhdnV5djVmIn0.ezlnoh6tk94oYQYj_X8DGQ'
export function fetchProducts(){
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload){
    return axios.post(`${API_URL}/orders`, payload);
}