import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
    let navigate = useNavigate();

    useEffect(() => {
        if(window.localStorage.getItem("logged-in") !== "yes") navigate("login");
    });

    function handleClick() {
        localStorage.setItem("logged-in", "no");
        navigate("login");
    }

    return (
        <div>
            <button onClick={handleClick}>Çıkış Yap</button>
        </div>
    );
}

export default Homepage;