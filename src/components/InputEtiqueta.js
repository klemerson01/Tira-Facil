import "./InputEtiqueta.css";
export function InputEtiqueta({ setValue, value, funcEnter }) {
  function handleClick(event) {
    setValue(event.target.value);
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      funcEnter();
    }
  }

  return (
    <>
      <input
        onChange={handleClick}
        onKeyDown={handleEnter}
        value={value}
        id="input"
        placeholder=" Digite aqui seu código..."
        required
        autoFocus
      />
    </>
  );
}

export default InputEtiqueta;
