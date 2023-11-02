import { MenuItem, Select } from "@mui/material";

function SelectDays({ days, handleDaysChange }) {
  return (
    <div
      className="select-days"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "0.5rem",
        fontSize:'0.9rem'
      }}
    >
      <p>Price Change in </p>
      <Select
        value={days}
        onChange={handleDaysChange}
        sx={{
          height: "2rem",
          fontSize:'0.8rem',
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        className="select-coin"
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
