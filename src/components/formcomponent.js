import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState(new Date(0));
    const [gender, setGender] = useState("");

    let navigate = useNavigate();

    function handleClick() {
        let newPerson = {};
        newPerson.name = name;
        newPerson.surname = surname;
        newPerson.username = username;
        newPerson.password = password;
        newPerson.birthdate = birthdate;
        newPerson.gender = gender;
        let tempUsers = [...localStorage.getItem("users")];
        tempUsers.push(newPerson);
        localStorage.setItem("users", JSON.stringify(tempUsers));
        navigate("../login");
        
    }

    return (
      <div className="signup">
        <form onSubmit={handleClick}>
            <label htmlFor="name">İsim:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
            <label htmlFor="surname">Soyisim:</label>
            <input type="text" id="surname" value={surname} onChange={e => setSurname(e.target.value)}/>
            <label htmlFor="username">Kullanıcı Adı:</label>
            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="password">Şifre:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="birthday:">Doğum Günü:</label>
            <input type="date" id="birhday" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
            <label htmlFor="gender">Cinsiyet:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option>Erkek</option>
                <option>Kadın</option>
                <option>Diğer</option>
            </select>
            <button type="submit" className="signupbutton" onClick={handleClick}>KAYIT OL</button>
        </form>
      </div>  
    );

}

export default Form;