import styled from "styled-components";
import Header from "../Components/common/Header/Header";
import TabsComponent from "../Components/DashboardComponents/TabsComponent";
import { useEffect, useState } from "react";
import get100Coins from "../Functions/get100Coins";
import PaginationComponent from "../Components/DashboardComponents/PaginationComponent";
import SearchComponent from "../Components/DashboardComponents/SearchComponent";
import BackToTop from "../Components/common/BackToTop";
import Loader from "../Components/common/Loader";
import Footer from "../Components/common/Footer/Footer";

const DashboardPage = () => {
  let [coins, setCoins] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  let [paginatedCoins, setPaginatedCoins] = useState([]);
  let [search, setSearch] = useState("");
  let [loader, setLoader] = useState(false);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    var startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  let filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) {
      return coin;
    }
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoader(true)
    const data = await get100Coins();
    if (data) {
      setCoins(data);
      setPaginatedCoins(data.slice(0, 10));
      setLoader(false)
    }
  };

  return (
    <DashboardContainer>
      <BackToTop />
      <Header />
      {loader ? (
        <Loader />
      ) : (
        <div>
          <SearchComponent search={search} setSearch={setSearch} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
          )}
        </div>
      )}
      <Footer />
    </DashboardContainer>
  );
};

export default DashboardPage;

let DashboardContainer = styled.div`
  color: white;
  min-height: 90vh;
`;
