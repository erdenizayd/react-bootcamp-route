import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();

    function handleClick() {
        let users = JSON.parse(localStorage.getItem("users"));
        users.forEach(element => {
            if(element.username === username && element.password === password) {
                localStorage.setItem("logged-in", "yes");
            }
        });
        navigate("/");
    }

    function handleSignup() {
        navigate("../signup");
    }

    return (
        <div className="login">
            <div className="loginheader"></div>
            <form onSubmit={handleClick}>
            <label htmlFor="username">Kullanıcı Adı:</label>
            <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text"></input>
            <label htmlFor="password">Şifre:</label>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password"></input>
            <div className="buttonrow">
                <button type="submit" className="loginbutton" onSubmit={handleClick} onClick={handleClick}>GİRİŞ YAP</button>
                <button className="signupbutton" onClick={handleSignup}>KAYIT OL</button>
            </div>
            </form>
        </div>
    )
}

export default Login;