import axios from "axios";
import { BASE_URL } from "./APIconstants";
import { getToken } from "./TokenUtil";

export async function DoctorServices(){
    try{
        const response= await axios.get(`${BASE_URL}/book-appointment`,getToken()!=undefined? {headers:{'Authorization':`Bearer ${getToken()}`}}:null);
    return response;
    }
    catch(error){
        console.log(error);
    }
}

export async function BookAppointment(booking){
    try{
        const response= await axios.post(`${BASE_URL}/book-appointment`,booking,{headers:{'Authorization':`Bearer ${getToken()}`}});
    return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export async function UpdateAppointment(updatedRec){
    try{
        const response= await axios.post(`${BASE_URL}/myprofile`,updatedRec,{headers:{'Authorization':`Bearer ${getToken()}`}});
    return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export async function DeleteAppointment(Record){
    try{
        const response= await axios.delete(`${BASE_URL}/myprofile/${Record._id}`,getToken()!=undefined? {headers:{'Authorization':`Bearer ${getToken()}`}}:null);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}