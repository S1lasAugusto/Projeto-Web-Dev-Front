import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import myLogo from "./logo2.svg";
import "../../styles/styleLogin.css";
import Header from "../../components/Header";


export const Register = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // botao de login 
  const handleCompleteRegister = async () => {
    if (userName && email && password) {
      const isRegistred = await auth.requestRegister(userName,email, password,"User");
      navigate("/");
      if (isRegistred) {
        navigate("/");
      } else {
        alert("Falha no cadastro");
      }
    }
  };
  
  return (
    <div className="main-login">
    <div className="left-login">
      <Header/>
      <img src={myLogo} className="left-login-image" alt="SVG logo" />
    </div>
    <div className="right-login">
      <div className="card-login">
        <h1>SIGN IN </h1>
        <div className="textfield">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
        <div className="textfield">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="textfield">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        
        <button className="btn-login" onClick={handleCompleteRegister}>
        Continue
        </button>
       
      </div>
    </div>
  </div>
  );
};
