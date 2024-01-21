import Header from "../components/Header";
import { useEffect, useState } from "react";
import "./Etiqueta.css";
import ModelEtiqueta from "../components/ModelEtiqueta";
import axios from "axios";
import { convertFromNode, EqNode, LeafNode } from "fiql-query-builder";
import Button from "../components/Button";
import InputEtiqueta from "../components/InputEtiqueta";
import CircularProgress from "@mui/joy/CircularProgress";

function Etiqueta() {
  const [produto, setProduto] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [codBarras, setCodBarras] = useState("");
  const [produtoNotFound, setProdutoNotFound] = useState(false);
  // const [teste, setTeste] = useState(false);
  useEffect(() => {
    console.log("prod", carregando);
  }, [carregando]);
  async function pesquisaProdutoId(id) {
    try {
      const response = await axios.get(
        `/api/v1/produto/produtos/consulta/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.myToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      alert("ERRO");
      console.error("Erro produto nao encontrado:", error);
    }
  }

  async function precoProdutoId(id) {
    try {
      const response = await axios.get(
        `/api/v1/produto/precos?q=${fiql("produtoId", id)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.myToken,
          },
        }
      );
      return response.data.items[0];
    } catch (error) {
      alert("ERRO");
      console.error("Erro na solicitação:", error);
    }
  }

  async function codProduto() {
    let propsProduto = {};
    setCarregando(true);
    // setProdutoNotFound(false)
    try {
      axios
        .get(
          `/api/v1/produto/codigos-auxiliares?q=${fiql(
            "id",
            `"0${codBarras}"`
          )}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.myToken,
            },
          }
        )
        .then(async (ok) => {
          if (ok.data.count == 0) {
            return (
              setCarregando(false), setCodBarras(""), setProdutoNotFound(true)
            );
          }
          console.log("aqui", ok.data);
          const cod = ok.data.items;

          const { id } = cod[0];
          propsProduto = { ...propsProduto, id };

          const { produtoId } = cod[0];
          propsProduto = { ...propsProduto, produtoId };

          const produtoCompleto = await pesquisaProdutoId(produtoId);
          const { descricao } = produtoCompleto;
          propsProduto = { ...propsProduto, descricao };

          const { precoVenda1 } = await precoProdutoId(produtoCompleto.id);
          propsProduto = { ...propsProduto, precoVenda1 };
          setCarregando(false);
          setProduto(propsProduto);

          console.log("depois do botao", carregando.valueOf());
          setCodBarras("");
          setProdutoNotFound(false);
        });
    } catch (error) {
      alert("ERRO");
      console.error("Erro na solicitação:", error);
    }
  }

  function fiql(chave, valor) {
    return convertFromNode(
      new EqNode(new LeafNode(chave), new LeafNode(valor))
    );
  }

  return (
    <>
      <Header
        label={
          <div
            style={{
              alignItems: "center",
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              color: "white",
              fontSize: "40px",
              fontFamily: "Helvetica",
            }}
          >
            <h6>Tira-Facil</h6>
          </div>
        }
      />
      <div id="bodyEtiqueta" className="divCentralizada">
        <div id="containerEtiqueta">
          <div id="topo" className="divCentralizada">
            <InputEtiqueta
              id="input"
              type="text"
              value={codBarras}
              setValue={setCodBarras}
              funcEnter={codProduto}
            />
            <Button id="botaoPreco" label="Pesquisar" onClick={codProduto} />
          </div>

          {/* Icone de carregamento */}
          {carregando && (
            <CircularProgress
              sx={{ zIndex: "tooltip", ml: 35, mt: 10 }}
              color="danger"
              size="lg"
              variant="soft"
            />
          )}

          {/* Etiqueta com os dados */}
          <div id="corpo12">
            {carregando !== false ? null : produtoNotFound == true ? (
              <div id="notFound"> Produto não encontrado</div>
            ) : (
              Object.keys(produto).length !== 0 && (
                <ModelEtiqueta
                  preco={produto.precoVenda1}
                  barras={produto.id}
                  descricao={produto.descricao}
                />
              )
            )}  
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Etiqueta;
