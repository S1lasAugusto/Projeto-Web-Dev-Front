import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import myLogo from "./logo.svg";
import "../../styles/styleLogin.css";
import Header from "../../components/Header";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // botao de login 
  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/home");
      } else {
        alert("Falha no login");
      }
    }
  };
    // Botao de cadastro 
  const handleRegister = async () => {
    navigate("/register");  
  };

  return (
    <div className="main-login">
      <div className="left-login">
        <Header/>
        <img src={myLogo} className="left-login-image" alt="SVG logo" />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
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
              ref={input => input && input.focus()}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  handleLogin();
                }
              }}
            />
          </div>
          
          <button className="btn-login" onClick={handleLogin}>
            Login
          </button>
          <button className="btn-secondary" onClick={handleRegister}>
            Create new account
          </button>
         
        </div>
      </div>
    </div>
  );
};
