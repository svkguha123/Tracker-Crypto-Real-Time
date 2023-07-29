import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import TabComponent from '../components/DashBoard/Tabs';
import Search from '../components/DashBoard/Search';
import PaginationComponent from '../components/DashBoard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';



const DashboardPage = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginationCoins, setPaginationCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    getData();
  }, []);


  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginationCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  }


  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }


  let filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())
  );


  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginationCoins(coins.slice(previousIndex, previousIndex + 10));
  };


  return (

    <div>

      <Header />
      <BackToTop />
      
      {isLoading ? (
        <Loader />

      ) : (

        <div>

          <Search search={search} onSearchChange={onSearchChange} />
          <TabComponent coins={search ? filteredCoins : paginationCoins} />
          {!search && (
            <PaginationComponent page={page} handleChange={handlePageChange} />
          )}
        </div>
      )}
    </div>
  )
}

export default DashboardPage;