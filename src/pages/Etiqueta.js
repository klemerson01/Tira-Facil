function Etiqueta() {
  return (
    <div>
      <p> {localStorage.getItem("myToken")} </p>
    </div>
  );
}

export default Etiqueta;
