import "./App.css";
import { Input } from "./components/Input.js";
import Button from "./components/Button";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  async function gerarToken() {
    console.log("consultando...");
    try {
      const token = await axios.post(
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
      console.log(token.data);
    } catch (error) {
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

          <div className="back">
            <Button label="Entrar" />
          </div>
        </form>
      </div>
      <div id="formulario">
        <div>
          <img id="img" src="/CPTK.png" />
        </div>
        <div id="textForm">
          <h5 id="titulo_main">Tira-Facill</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
    