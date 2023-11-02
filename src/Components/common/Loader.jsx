import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--black)",
        zIndex: "1000",
        overflowX:'hidden',
        overflowY:'hidden',
        position:'fixed'
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loader;
