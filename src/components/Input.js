import "./Input.css";
import TextField from "@mui/material/TextField";

export function Input({ placeholder, type, icon, setValue }) {
  function handleClick(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <TextField
        label={
          <div style={{ display: "flex", alignItems: "start" }}>
            {icon && <span style={{ marginRight: "5px" }}>{icon}</span>}
            <span>{placeholder}</span>
          </div>
        }
        onChange={handleClick}
        fullWidth
        type={type}
        variant="outlined"
        inputProps={{ className: "teste" }}
        InputLabelProps={{ className: "teste" }}
        style={{ marginBottom: "15px" }}
        // size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Altere para a cor vermelha desejada
            },
            "&:hover fieldset": {
              borderColor: "#808080", // Altere para a cor vermelha desejada ao passar o mouse
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& fieldset": {
              borderColor: "white", // Altere para a cor vermelha desejada quando em foco
            },
          },
        }}
      />
    </>
  );
}

export default Input;
