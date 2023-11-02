import { useEffect, useState } from "react";
import CoinInfo from "../Components/CoinFolder/CoinInfo";
import { getCoinData } from "../Functions/getCoinData";
import { convertObject } from "../Functions/convertObject";
import Header from "../Components/common/Header/Header";
import Loader from "../Components/common/Loader";
import { useParams } from "react-router-dom";
import ListComponent from "../Components/DashboardComponents/ListComponent";
import styled from "styled-components";
import { getCoinPrice } from "../Functions/getCoinPrice";
import { convertDate } from "../Functions/covertDate";
import SelectDays from "../Components/CoinFolder/SelectDays";
import LineChart from "../Components/CoinFolder/LineChart";
import { settingChartData } from "../Functions/settingChartData";
import PriceToggle from "../Components/CoinFolder/PriceToggle";
import Footer from "../Components/common/Footer/Footer";

const CoinPage = () => {
  const { id } = useParams();
  let [coin, setCoin] = useState();
  let [loader, setLoader] = useState(false);
  let [days,setDays] = useState(30)
  let [priceType,setPriceType] = useState('prices')
  let [chartData,setChartData] = useState({})

  async function handleDaysChange(e){
    setDays(e.target.value)
    let prices =  await getCoinPrice(id,e.target.value,priceType)
    if(prices.length > 0){
      settingChartData(setChartData,prices)
    }
  }

  async function handlePriceTypeChange(e,newType){
    setPriceType(newType)
    let prices =  await getCoinPrice(id,days,newType)
    if(prices.length > 0){
      settingChartData(setChartData,prices)
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  async function getData() {
    setLoader(true);
    let coinData = await getCoinData(id);
    if (coinData) {
      convertObject(setCoin, coinData);
      let prices = await getCoinPrice(id,days,priceType)
      if(prices.length > 0){
        settingChartData(setChartData,prices)
        setLoader(false);
      }
    }
  }

  return (
    <CoinPageContainer style={{ color: "var(--white)" }}>
      <Header />
      {loader || !coin?.id ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="grey-wrapper-list"><ListComponent coin={coin} delay={0.5} /></div>
          <div className="grey-wrapper">
            <div className="select-days">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            </div>
            <div className="price-toggle">
              <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
            </div>
            <div className="chart-div">
            <LineChart chartData={chartData} priceType={priceType} />
            </div>
          </div>
          <CoinInfo coinName={coin.name} desc={coin.desc} />
        </div>
      )}
      <Footer />
    </CoinPageContainer>
  );
};

export default CoinPage;

let CoinPageContainer = styled.div`
  .container{
    display: flex;
    flex-direction: column;
    margin: auto 1.5rem;
    gap: 1rem;
    padding: 0 1.5rem;
  }
  .price-toggle{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  @media only screen and (max-width:500px){
    .container{
      margin: 0;
      .grey-wrapper,.grey-wrapper-list{
  padding:0.5rem 1rem;
}
.grey-wrapper-list{
  padding: 0.6rem 0.3rem;
}
    }
  }
`
