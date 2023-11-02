import { TrendingDownRounded, TrendingUpRounded } from "@mui/icons-material";
import styled from "styled-components";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

const GridComponent = ({ coin , delay }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={
          coin.price_change_percentage_24h < 0 ? "red-border container" : "green-border container"
        }
      >
        <div className="info">
          <div className="img-div">
            <img src={coin.image} alt="coinimg" className="coin-img" />
            <div className="coin-name">
              <h4>{coin.symbol.toUpperCase()}</h4>
              <p className="coin-fullname">{coin.name} </p>
            </div>
          </div>
        </div>
        <div className="percentage">
          {coin.price_change_percentage_24h > 0 ? (
            <div className="percentage">
              <div className="chip-percentage green">
                {coin.price_change_percentage_24h.toFixed(2)} %
              </div>
              <div className="trending-icon green">
                <TrendingUpRounded className="icon"/>
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
        <div className="price-div">
          <p
            className={
              coin.price_change_percentage_24h < 0 ? "price-red" : "price-green"
            }
          >
            ${coin.current_price.toLocaleString()}
          </p>
        </div>
        <div className="total-volume">
          <span className="span-volume">
            Toatal Volume : ${coin.total_volume.toLocaleString()}
          </span>
          <span className="span-volume">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </span>
        </div>
      </motion.div>
    </Container>
    </Link>
  );
};

export default GridComponent;

let Container = styled.div`
  .container{
   font-size: 1rem !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  width: 17rem;
  height: 17rem;
  border-radius: 1.3rem;
  background-color: var(--darkgrey);
  }
  .red-border:hover{
    outline: 0.15rem solid var(--red);
    transition: 0.3s;
  }
  .green-border:hover{
    outline: 0.15rem solid var(--green);
    transition: 0.3s;
  }
  .info {
    display: flex;
    justify-content: space-between;
    .img-div {
      display: flex;
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
    .chip-percentage {
      border: 2px solid var(--green);
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
      border: 2px solid var(--green);
      padding: 0.3rem;
      color: var(--green);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .red {
      border: 2px solid var(--red);
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
  .total-volume {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 600;
  }
  .span-volume {
    color: var(--grey);
    font-size: 0.8rem;
  }
  .price-green {
    color: var(--green);
    font-weight: 600;
  }
  .price-red {
    color: var(--red);
    font-weight: 600;
  }
`;
