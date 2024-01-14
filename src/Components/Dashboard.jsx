import React, {useState} from "react";
import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {
    const { authUser, setAuthUser,
        isLoggedIn, setIsLoggedIn,} = useAuth()

    const logIn = (e) =>{
        e.preventDefault();
        setIsLoggedIn(true)
        setAuthUser({
            name: "bob"
        })
    }

    const logOut = (e) =>{
        e.preventDefault();
        setIsLoggedIn(false)
        setAuthUser(null)
    }

    return (
        <div>
            Dashboard <br />
            <span>User is {isLoggedIn ? "logged in" : "logged out"}</span><br />
            <span>{isLoggedIn ? "name: " + authUser.name : null}</span> <br />
            {isLoggedIn ?<button onClick={(e)=>logOut(e)}>Log out</button> :  <button onClick={(e)=>logIn(e)}>Log in</button> }
           
            
        </div>
    )
}

export default Dashboard;