import "./Button.css";

function Button({ label, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
