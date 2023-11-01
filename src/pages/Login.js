import "./Login.css";
import { Input } from "../components/Input.js";
import Button from "../components/Button";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  async function gerarToken() {
    console.log("consultando...");
    try {
      let token = await axios.post(
        "/api/auth", // Use o caminho de proxy configurado
        {
          username: user,
          password: pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("myToken", token.data.accessToken);
      console.log(localStorage);
      navigate("/home");
    } catch (error) {
      alert("ERRO");
      console.error("Erro na solicitação:", error);
    }
  }

  return (
    <div id="div_geral">
      <div id="main">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            gerarToken();
          }}
          className="form"
          id="sizeInput"
        >
          <h1 id="h1">Faça seu login</h1>
          <Input
            placeholder={"Username"}
            type={"text"}
            icon={<PersonIcon />}
            setValue={setUser}
          />
          <br />
          <Input
            setValue={setPass}
            placeholder={"Password"}
            type={"password"}
            icon={<KeyIcon />}
          />

          <Button label="Entrar" />
        </form>
      </div>
      <div id="formulario">
        <div>
          <img id="logo" src="/CPTK.png" />
        </div>
        <div id="textForm">
          <h5 id="titulo_main">Tira-Facil</h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
