import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import styled from "styled-components";
function PaginationComponent({ pageNumber, handleChange }) {
  return (
    <PageContainer>
      <Pagination
        count={10}
        page={pageNumber}
        onChange={handleChange}
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </PageContainer>
  );
}

export default PaginationComponent;

let PageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem ;
`