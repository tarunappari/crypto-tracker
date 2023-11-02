import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Button from "../common/Button";
import { useState } from "react";
import GridComponent from "./GridComponent";
import ListComponent from "./ListComponent";
import styled from "styled-components";

const TabsComponent = ({ coins, isWatchList, setSearch }) => {
  let [value, setValue] = useState("grid");

  let handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  let style = {
    color: "var(--white)",
    minWidth: "46vw",
    fontSize: "1rem",
    fontFamily: "Inter",
    fontWeight: "600",
    textTransform: "capitalize",
    margin: "auto",
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>

          <TabPanel value="grid">
            {coins.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  height: "30vh",
                }}
              >
                <h1>No coins found</h1>
                <Button
                  text={"Clear Search"}
                  onClickFunc={(e) => {
                    setSearch("");
                  }}
                />
              </div>
            ) : (
              <div className="coins-grid">
                {coins.map((coin, i) => (
                  <GridComponent
                    coin={coin}
                    key={i}
                    delay={((i + 5) % 5) * 0.1}
                  />
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel value="list">
            {coins.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  height: "30vh",
                }}
              >
                <h1>No coins found</h1>
                <Button
                  text={"Clear Search"}
                  onClickFunc={(e) => {
                    setSearch("");
                  }}
                />
              </div>
            ) : (
              <table className="list-coins">
                {coins.map((coin, i) => (
                  <ListComponent coin={coin} key={i} delay={(i % 10) * 0.1} />
                ))}
              </table>
            )}
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </Container>
  );
};

export default TabsComponent;

let Container = styled.div`
  .coins-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0.3rem 2rem;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1100px) {
    .coins-grid {
      grid-template-columns: 1fr 1fr 1fr;
      .container {
        width: 20rem;
        height: 20rem;
      }
    }
  }

  @media only screen and (max-width: 1050px) {
    .coins-grid {
      grid-template-columns: 1fr 1fr;
      .container {
        padding: 3rem;
        width: 25rem;
        height: 25rem;
        img {
          width: 4rem;
          height: 4rem;
        }
      }
      .coin-name {
        font-size: 130%;
        .coin-fullname {
          font-size: 80%;
        }
      }
      .price-div {
        font-size: 1.6rem;
      }
      .span-volume {
        font-size: 1.2rem;
      }
      .chip-percentage {
        border: 0.15rem solid var(--green);
        padding: 0.7rem 1.5rem;
        font-size: 1.5rem;
        border-radius: 1.8rem;
      }
      .trending-icon {
        border: 0.15rem solid var(--green);
        .icon {
          font-size: 2.2rem;
        }
      }
      .red {
        border: 2px solid var(--red);
        color: var(--red);
      }
    }
  }

  @media only screen and (max-width: 850px) {
    .coins-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .container {
        padding: 3rem;
        width: 28rem;
        height: 28rem;
        img {
          width: 4rem;
          height: 4rem;
        }
      }
      .coin-name {
        font-size: 150%;
        .coin-fullname {
          font-size: 90%;
        }
      }
      .price-div {
        font-size: 1.7rem;
      }
      .span-volume {
        font-size: 1.2rem;
      }
      .chip-percentage {
        border: 0.15rem solid var(--green);
        padding: 0.7rem 1.5rem;
        font-size: 1.5rem;
        border-radius: 1.8rem;
      }
      .trending-icon {
        border: 0.15rem solid var(--green);
        .icon {
          font-size: 2.2rem;
        }
      }
      .red {
        border: 2px solid var(--red);
        color: var(--red);
      }
    }
  }

  @media only screen and (max-width: 550px) {
    font-size: 1rem;
    .coins-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .container {
        padding: 2rem;
        width: 15rem;
        height: 15rem;
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      .coin-name {
        font-size: 90%;
        .coin-fullname {
          font-size: 70%;
        }
      }
      .price-div {
        font-size: 1rem;
      }
      .span-volume {
        font-size: 0.6rem;
      }
      .chip-percentage {
        border: 0.12rem solid var(--green);
        padding: 0.2rem 0.7rem;
        font-size: 0.7rem;
        border-radius: 1.8rem;
      }
      .trending-icon {
        border: 0.12rem solid var(--green);
        .icon {
          font-size: 1rem;
        }
      }
    }
  }
`;
