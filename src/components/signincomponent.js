import { useEffect, useState } from "react";
import Form from "./formcomponent";

function Signup() {



    useEffect(() => {
        if(localStorage.getItem("users") === null){
            localStorage.setItem("users", []);
        }
    },[]);

    return (
        <div>
            <Form/>
        </div>
    );
}

export default Signup;