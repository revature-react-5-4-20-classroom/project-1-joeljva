//action-ammppers

import { User } from "../models/user"


//the login componet sents the 

export const loginTypes = {
    LOGIN_User: "REACT_LOGIN_USER"
}

export const loginSaveUserMapper = (user: User) => {

    return {
        type: loginTypes.LOGIN_User,
        playload: {
            user
        }

    }



}

