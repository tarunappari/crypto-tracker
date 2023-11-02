import styled from "styled-components";
import { TrendingDownRounded, TrendingUpRounded } from "@mui/icons-material";
import { convertNumbers } from "../../Functions/convertNumbers";
import { Tooltip } from "@mui/material";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

const ListComponent = ({ coin, delay }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div 
      style={{width:'100%'}}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}>
    <Container>
        <td>
          <div className="info">
            <div className="img-div">
              <img src={coin.image} alt="coinimg" className="coin-img" />
              <div className="coin-name">
                <h4>{coin.symbol.toUpperCase()}</h4>
                <p className="coin-fullname">{coin.name} </p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="percentage">
            {coin.price_change_percentage_24h > 0 ? (
              <div className="percentage">
                <div className="chip-percentage green">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <div className="trending-icon green">
                  <TrendingUpRounded className="icon" />
                </div>
              </div>
            ) : (
              <div className="percentage">
                <div className="chip-percentage red">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <div className="trending-icon red">
                  <TrendingDownRounded className="icon" />
                </div>
              </div>
            )}
          </div>
        </td>
        <Tooltip placement="bottom-start" title="Current price">
          <td>
            <div className="price-div">
              <p
                className={
                  coin.price_change_percentage_24h < 0
                    ? "price-red"
                    : "price-green"
                }
              >
                ${coin.current_price.toLocaleString()}
              </p>
            </div>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Total Volume">
          <td className="td-mkt-cap">
            <span className="coin-total_volume cap">
              ${coin.total_volume.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="td-mkt-cap">
            <span className="coin-total_volume cap">
              ${coin.market_cap.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="mobile-td-cap cap">
            <span className="coin-total_volume coin-total_volume-list">
              ${convertNumbers(parseFloat(coin.market_cap))}
            </span>
          </td>
        </Tooltip>
    </Container>
    </motion.div>
    </Link>
  );
};

export default ListComponent;

let Container = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
    border-radius: 1rem;
    margin: 0 2rem;
    font-size: 85%;
    &&:hover {
      background-color: var(--darkgrey);
      transition: 0.4s;
    }
  td {
    width: 18%;
  }
  .mobile-td-cap {
    display: none;
  }
  .info {
    display: flex;
    justify-content: space-between !important;
    .img-div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.9rem;
    }
    .coin-name {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .coin-fullname {
      font-size: 0.8rem;
      color: var(--grey);
    }
  }
  .percentage {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
    .chip-percentage {
      border: 0.12rem solid var(--green);
      color: var(--green);
      padding: 0.3rem 0.8rem;
      border-radius: 1.3rem;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
    .trending-icon {
      border: 0.12rem solid var(--green);
      padding: 0.3rem;
      color: var(--green);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .red {
      border: 0.12rem solid var(--red);
      color: var(--red);
    }
    .red:hover {
      background-color: var(--red);
      color: var(--white);
      transition: 0.3s;
    }
    .green:hover {
      background-color: var(--green);
      color: var(--white);
      transition: 0.3s;
    }
  }
  .cap {
    font-size: 0.9rem;
  }
  .price-green {
    color: var(--green);
    font-weight: 600;
  }
  .price-red {
    color: var(--red);
    font-weight: 600;
  }

  @media only screen and (max-width:880px){
    font-size: 85%;
    margin: 0rem;
    padding: 0.9rem 0.3rem;
    .mobile-td-cap {
    display: block;
  }
  .td-mkt-cap {
    display: none;
  }
  .percentage{
    justify-content: center;
    .trending-icon{
    display: none;
  }
  }
  .cap {
    font-size: 0.8rem;
  }
  }
  
  @media only screen and (max-width:580px){
    font-size: 78%;
    margin: 0rem;
    padding: 0.7rem 0.1rem;
  }
  @media only screen and (max-width:480px){
    font-size: 78%;
    margin: 0;
    padding: 0.7rem 0rem;
    img{
        width: 1.5rem;
        height: 1.5rem;
    }
    .info{
        .coin-name{
            font-size: 0.7rem;
        }
        .coin-fullname{
            font-size: 0.6rem;
        }
    }
    .percentage {
    justify-content: flex-end;
    width: 100%;
    .chip-percentage {
      border: 0.09rem solid var(--green);
      padding: 0.25rem 0.6rem;
      font-size: 0.7rem;
      font-weight: 500;
    }
    .red {
      border: 0.09rem solid var(--red);
    }
  }
  .cap {
    font-size: 0.7rem;
  }
  .price-green {
    font-weight: 500;
    font-size: 0.8rem;
  }
  .price-red {
    font-weight: 500;
    font-size: 0.8rem;
  }
  }

  @media only screen and (max-width:480px){
    .percentage {
    .chip-percentage {
      border: 0.085rem solid var(--green);
      padding: 0.2rem 0.5rem;
      font-size: 0.5rem;
      font-weight: 400;
    }
    .red {
      border: 0.085rem solid var(--red);
    }
  }
  }

  @media only screen and (max-width:330px){
    .percentage {
    .chip-percentage {
      display: none;
    }
  }
  .price-green {
    font-weight: 500;
    font-size: 0.7rem;
  }
  .price-red {
    font-weight: 500;
    font-size: 0.7rem;
  }
  }

`;
