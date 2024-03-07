import axios from "axios";
import { BASE_URL } from "./APIconstants";
import { getToken } from "./TokenUtil";

export async function saveUser(userData){
    try {
        const response=await axios.post(`${BASE_URL}/newuser`,userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getUserProfile(){
    try{
        const obj = await axios.get(`${BASE_URL}/myprofiles`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return obj.data;
    }
    catch(error){
        console.log(error);
    }
}

export async function login(credentials){
    const response=await axios.post(`${BASE_URL}/employee/login`,credentials);
    return response.data;
} 
