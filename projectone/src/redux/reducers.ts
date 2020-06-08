





//reducer that takes in the state and an action to sace th user details to store

import { User } from "../models/user";
import { AnyAction, combineReducers } from "redux";
import { loginTypes } from "./action-mappers";


interface IUser {
    user: User
}

let IDefaultUser: IUser = {
    user: new User(0, "", "", "", "", "", 0, "")



}
// let user= new User(0,"","","","","",0,"")

export const loginReducer = (state: IUser = IDefaultUser, action: AnyAction): IUser => {
    switch (action.type) {
        case loginTypes.LOGIN_User: {
            const user = action.playload.user;
            return {

                ...state,
                user: user

            }





        }
        default:
            return state;




    }



}
//interface for all the sater
export interface IState {
    loginUser: IUser
}

export const state = combineReducers<IState>({
    loginUser: loginReducer
})


// export const state = combineReducers<any>({
//     loginUser: loginReducer
// })