


//functionto get all pending requests from emmployeees

import { project0Client } from "./project0";
import { Reimbursement } from "../models/reimbursement";

export const getPending = async (): Promise<Reimbursement[]> => {
    try {
        let response = await project0Client.get("/reimbursements/status/1");
        console.log(response.data);
        return response.data;
    }
    catch (e) {
        throw e;
    }

}

//pathc reims
export const pathReimbursement = async (ri: number, da: string, de: string, re: number, st: number) => {
    try {
        let response = await project0Client.patch("reimbursements", { reimbursementId: ri, dateResolved: da, description: de, resolver: re, status: st });
        console.log(response.data);
        return response.data;

    } catch (e) {
        throw e;
    }

}



//get all users
export const getAllUsers = async () => {
    try {
        let response = await project0Client.get("/users");
        console.log(response.data);
        return response.data;

    } catch (e) {
        console.log(e);
        throw e;
    }
}


//function to fet riems from on user by id

export const getReimsByUserId = async (id: number) => {

    try {
        let response = await project0Client.get(`/reimbursements/author/userId/${id}`);
        console.log(response.data);
        return response.data;



    } catch (e) {
        throw e;
    }

}