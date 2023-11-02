import React, { useEffect, useState } from "react";
import CoinInfo from "../Components/CoinFolder/CoinInfo";
import LineChart from "../Components/CoinFolder/LineChart";
import PriceToggle from "../Components/CoinFolder/PriceToggle";
import Header from "../Components/common/Header/Header";
import Loader from "../Components/common/Loader";
import SelectCoins from "../Components/CompareComponents/SelectCoins";
import ListComponent from "../Components/DashboardComponents/ListComponent";
import { convertObject } from "../Functions/convertObject";
import get100Coins from "../Functions/get100Coins";
import { getCoinData } from "../Functions/getCoinData";
import { getCoinPrice } from "../Functions/getCoinPrice";
import { settingCoinsChartData } from "../Functions/settingCoinsChartData";
import styled from "styled-components";
import Footer from "../Components/common/Footer/Footer";

function ComparePage() {
  const [allCoins, setAllCoins] = useState([]);
  const [coin1, setCoin1] = useState(allCoins[0]?.id ?? "bitcoin");
  const [coin2, setCoin2] = useState(allCoins[1]?.id ?? "ethereum");
  const [days, setDays] = useState(120);
  const [coin1Data, setCoin1Data] = useState();
  const [coin2Data, setCoin2Data] = useState();
  const [loading, setLoading] = useState(false);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const handlePriceTypeChange = async (e) => {
    setLoading(true);
    setPriceType(e.target.value);
    const prices1 = await getCoinPrice(coin1, days, e.target.value);
    const prices2 = await getCoinPrice(coin2, days, e.target.value);
    settingCoinsChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
    setLoading(false);
  };

  const handleCoinChange = async (e, isCoin1) => {
    setLoading(true);
    if (isCoin1) {
      setCoin1(e.target.value);
      const data1 = await getCoinData(e.target.value);
      convertObject(setCoin1Data, data1);
      const prices1 = await getCoinPrice(e.target.value, days, priceType);
      const prices2 = await getCoinPrice(coin2, days, priceType);
      settingCoinsChartData(setChartData, prices1, data1, coin2Data, prices2);
    } else {
      setCoin2(e.target.value);
      const data2 = await getCoinData(e.target.value);
      convertObject(setCoin2Data, data2);
      const prices1 = await getCoinPrice(coin1, days, priceType);
      const prices2 = await getCoinPrice(e.target.value, days, priceType);
      settingCoinsChartData(setChartData, prices1, coin1Data, data2, prices2);
    }
    setLoading(false);
  };

  const handleDaysChange = async (e) => {
    setLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrice(coin1, e.target.value, priceType);
    const prices2 = await getCoinPrice(coin2, e.target.value, priceType);
    settingCoinsChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await get100Coins();
    if (data) {
      setAllCoins(data);
    }
    const data1 = await getCoinData(coin1);
    const data2 = await getCoinData(coin2);
    convertObject(setCoin1Data, data1);
    convertObject(setCoin2Data, data2);
    const prices1 = await getCoinPrice(coin1, days);
    const prices2 = await getCoinPrice(coin2, days);
    settingCoinsChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading || !coin1Data?.id || !coin2Data?.id ? (
        <Loader />
      ) : (
        <CompareContainer>
          <SelectCoins
            allCoins={allCoins}
            coin1={coin1}
            coin2={coin2}
            days={days}
            handleCoinChange={handleCoinChange}
            handleDaysChange={handleDaysChange}
          />
          <div className="grey-wrapper-list">
            <ListComponent coin={coin1Data} delay={0.1} />
          </div>
          <div className="grey-wrapper-list">
            <ListComponent coin={coin2Data} delay={0.2} />
          </div>
          <div className="grey-wrapper">
            <PriceToggle
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart
              chartData={chartData}
              multiAxis={true}
              priceType={priceType}
            />
          </div>
            <CoinInfo coinName={coin1Data.name} desc={coin1Data.desc} />
            <CoinInfo coinName={coin2Data.name} desc={coin2Data.desc} />
        </CompareContainer>
      )}
      <Footer />
    </div>
  );
}

export default ComparePage;

let CompareContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--white);
  padding: 2rem;
  .select-flex{
    display: flex;
    gap:1rem;
    padding: 0 0.3rem;
  }
  .coin-selector{
    display: flex;
    gap: 1rem;
  }
  .select{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media only screen and (max-width:540px){
    .select-flex{
    gap:0.5rem;
  }
    .select{
      p{
        display: none;
      }
    }
  }
  @media only screen and (max-width:540px){
    .select-flex{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
  .coin-selector{
    justify-content: space-between;
    width: 100%;
  }
  }
`