import { useState } from "react";


function login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [erreur,setErreur] = useState({});

    function handleSubmit(e){
        e.preventDefault(); 
        const newErreur = {}; // Initialize an empty object to store error messages
        // verfier si l'email est vide ou invalide
        if (email.trim() === "") {
            newErreur.email = "Email is required";
        }
        // verfier si l'email est valide
        else if (!/\S+@\S+\.\S+/.test(email)) {
            newErreur.email = "Email is invalid";
        }
        // verfier si le mot de passe est vide ou invalide
        if (password.trim() === "") {
            newErreur.password = "Password is required";
        }
        // verfier si le mdp contient au moins 8 caractères
        if(password.length < 8){
            newErreur.password = "Password must be at least 8 characters";
        }
        // verfier si le mdp contient au moins une majuscule, un chiffre et une lettre
        if(!/[A-Z]/.test(password)){ 
            newErreur.password = "Password must contain at least one uppercase letter";
        }
        // verfier si le mdp contient au moins une lettre minuscule
        if(!/[a-z]/.test(password)){
            newErreur.password = "Password must contain at least one lowercase letter";
        }
        // verfier si le mdp contient au moins un chiffre
        if(!/[0-9]/.test(password)){
            newErreur.password = "Password must contain at least one number";
        }
        // verfier si le mdp contient au moins caractère spécial
        if(!/[^a-zA-Z0-9]/.test(password)){
            newErreur.password = "Password must contain at least one special character";
        }
        console.log(newErreur);
        setErreur(newErreur);
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {erreur.email && <p className="error">{erreur.email}</p>}
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {erreur.password && <p className="error">{erreur.password}</p>}
        </div>
        <button type="submit">Login</button>
    </form>
    );   

}
export default login;