import { MenuItem, Select } from "@mui/material";


function SelectCoin({
  allCoins,
  coin1,
  coin2,
  days,
  handleCoinChange,
  handleDaysChange,
}) {
  const selectStyle = {
    height: "2rem",
    color: "var(--white)",
    fontSize:'0.8rem',
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
  };

  return (
    <div className="select-flex">
      <div className="coin-selector">
      <div className="select">
      <p style={{fontSize:'0.9rem'}}>Crypto 1</p>
      <Select
        className="select-coin"
        value={coin1}
        onChange={(e) => handleCoinChange(e, true)}
        sx={selectStyle}
      >
        {allCoins
          .filter((coin) => coin.id != coin2)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      </div>

      <div className="select">
      <p style={{fontSize:'0.9rem'}}>Crypto 2</p>
      <Select
        className="select-coin"
        value={coin2}
        onChange={(e) => handleCoinChange(e, false)}
        sx={selectStyle}
      >
        {allCoins
          .filter((coin) => coin.id != coin1)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      </div>
      </div>

      <Select
        value={days}
        onChange={handleDaysChange}
        sx={selectStyle}
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

export default SelectCoin;
