import "./InputEtiqueta.css";
export function InputEtiqueta({ setValue, value, funcEnter }) {
  function handleClick(event) {
    setValue(event.target.value);
  }

  function handleEnter(event) {
    if (event.key === "Enter" && value.trim() !== "") {
      funcEnter();
    }
  }

  return (
    <input
      type="number"
      onChange={handleClick}
      onKeyDown={handleEnter}
      value={value}
      id="input"
      placeholder=" Digite aqui seu código..."
      autoFocus
    />
  );
}

export default InputEtiqueta;
