import Button from "@mui/material/Button";

const Button1 = ({ onClick, buttonName }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {buttonName}
    </Button>
  );
};
export { Button1 };
