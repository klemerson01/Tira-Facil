import "./ModelEtiqueta.css";
import Barcode from "react-barcode";

function ModelEtiqueta({ barras, preco, descricao }) {
  return (
    <>
      <div id="retangulo">
        <div className="emCima">{descricao}</div>
        <div className="emBaixo">
          <div id="barras">
            <Barcode value={barras} background="#ffff00" height={50} />
          </div>
          <div id="preco">R$ {preco}</div>
        </div>
      </div>
    </>
  );
}

export default ModelEtiqueta;
