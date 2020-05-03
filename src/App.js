import React, { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import InfoCards from './components/InfoCards'
import Chart from './components/Chart';
import './App.css';
import { FetchSummary, FetchCountryData } from "./components/fetchData";

function App() {
  const [searchInput, setSearchInput] = useState("Global")
  const [info, setInfo] = useState([])
  const [status, setStatus] = useState({ summaryData: 'ok', countryData: 'ok' })
  const [globalInfo, setGlobalInfo] = useState({})
  const [CountryWiseData, setCountryWiseData] = useState([])
  const filterData = () => {
    if (status.summaryData !== 'ok')
      return null
    const data = info.filter((d) => { return d.Country === searchInput })
    return data[0]
  }
  const getCountryData = async () => {
    const country = filterData()
    const data = await FetchCountryData({ country, setStatus, status })
    setCountryWiseData(data)
  }
  const getData = async () => {
    const data = await FetchSummary({ setStatus, status })
    console.log(data)
    setGlobalInfo(data.Global)
    setInfo(data.Countries)

  }
  // eslint-disable-next-line
  useEffect(() => { getData() }, [])
  // eslint-disable-next-line
  useEffect(() => { getCountryData() }, [searchInput])

  return (
    <div className="App">
      <div className={'countrySelector'}>
        <h1>GLOBAL COVID19 TRACKER</h1>
      </div>
      {status.summaryData === 'error' ? <p className="statusError">Something went wrong :( </p> :
        <>
          <InfoCards data={globalInfo} />
          <br></br>
          {/* <Chart data={globalInfo} /> */}

          <br></br>
          <div className={'countrySelector'}>
            <h1>{searchInput === "" || searchInput === "Global" ? "Get Country Info" : searchInput.toUpperCase() + " COVID19 INFO"} </h1>
            <SearchForm searchInput={searchInput} setSearchInput={setSearchInput} data={info} />
          </div>
          <InfoCards data={(() => filterData())()} />
          {status.countryData === 'error' ? <p className="statusError">Something went wrong :( Chart unavailable</p> :
            <>

              <br></br>
              <Chart data={CountryWiseData} searchInput={searchInput} />
            </>
          }
        </>
      }


    </div>
  );
}

export default App;
