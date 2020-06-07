import axios from 'axios';
import { User } from '../models/user';
import Fs from "fs";
import { store } from '../redux/store';
import { loginSaveUserMapper } from '../redux/action-mappers';
import Axios from 'axios';
import Path from 'path'
import { Reimbursement } from '../models/reimbursement';

export const project0Client = axios.create({
    // baseURL: 'http://localhost:60005/',

    baseURL: "http://ec2-18-191-218-24.us-east-2.compute.amazonaws.com:60005",
    // If you don't have the following line, your login won't work!
    withCredentials: true,
});

//employeees

//function to get login
export async function loginP(un: string, pas: string): Promise<User> {
    try {
        // console.log("hello")
        const response = await project0Client.post("/login", { username: un, password: pas });
        // console.log(response.data)

        const { userId, username, password, firstName, lastName, email, role, roleName } = response.data;
        let user = new User(userId, username, password, firstName, lastName, email, role, roleName);
        store.dispatch(loginSaveUserMapper(user));
        return user;
    }
    catch (e) {
        console.log(e.message);
        throw e;


    }

}
//server hello
export async function helloP() {


    const response = await project0Client.get("/hello");
    return response;
}

//submit reimburesments
export async function submitReimbursements(author: number, amount: number, date: string, description: string, type: number) {
    try {
        const response = await project0Client.post("/reimbursements", { author: author, amount: amount, dateSubmitted: date, description: description, type: type });
        // console.log(response.data);

    } catch (e) {
        throw e;

    }

}


//functoin to get pending requests
export async function getReimbursements(userId: number):Promise<Reimbursement[]> {

    try {
        const response = await project0Client.get(`/reimbursements/author/userId/${userId}`);
        return response.data;
    } catch (e) {
        throw e;
        

    }
}


//function to edit users
export async function editUsers(ui: number, us: string, fi: string, la: string, em: string, pass?: string):Promise<User> {
    try {
        console.log(pass)
        if (pass) {
            const response = await project0Client.patch("/users", { userId: ui, username: us, firstName: fi, lastName: la, email: em, password: pass });
          
            return response.data;
        }
        else {
            const response = await project0Client.patch("/users", { userId: ui, username: us, firstName: fi, lastName: la, email: em });
        
            return response.data;
        }




    } catch (e) {
        throw e;


    }
}


// //to get a image doenlaod folder
// export let s3get=async()=>{
//     try{
// let response= await Axios({
//     url:"http://localhost:60005/s3/receipt",
//     method:"GET",
//     responseType:"stream",
//     withCredentials:true
// })


//     }catch(e){
// console.log(e);
//     }
// }