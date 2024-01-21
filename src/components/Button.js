import "./Button.css";

function Button({ label, onClick, id }) {
  return (
    <button className="custom-button" id={id} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
