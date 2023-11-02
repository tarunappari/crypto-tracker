import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import styled from "styled-components";

const SearchComponent = ({ search, setSearch }) => {
  return (
    <SearchContainer>
      <div className="main">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="icon-div">
          <SearchRoundedIcon style={{ color: "var(--grey)" }} />
        </div>
      </div>
    </SearchContainer>
  );
};

export default SearchComponent;

let SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0;
  .main {
    position: relative;
  }
  input {
    background-color: var(--darkgrey);
    border: none;
    padding: 0.9rem 3rem;
    color: var(--grey);
    width: 85vw;
    border-radius: 2rem;
    font-size: 1rem;
  }
  input:focus {
    outline: none;
  }
  .icon-div {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    width: 0.5rem;
    height: 0.5rem;
  }

  @media only screen and (max-width: 480px) {
    input {
      padding: 0.7rem 3rem;
    }
    .icon-div {
      top: 0.65rem;
    }
  }
`;
