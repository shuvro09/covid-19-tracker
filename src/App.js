import React, { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import InfoCards from './components/InfoCards'
import Chart from './components/Chart';
import './App.css';
import FetchData from "./components/fetchData";

function App() {
  const [seacrchInput, setSearchInput] = useState("Global")
  const [info, setInfo] = useState({})
  const [status, setStatus] = useState("ok")
  const [globalInfo, setGlobalInfo] = useState({})


  const getData = async (seacrchInput) => {
    //const keyword = seacrchInput === "Global" ? "" : seacrchInput
    if (info === {})
      console.log("empty")
    const data = await FetchData({ seacrchInput, setStatus })
    console.log(data)
    if (seacrchInput === "Global") {
      setGlobalInfo(data)
    }
    else
      setInfo(data)
  }
  // eslint-disable-next-line
  useEffect(() => { getData(seacrchInput) }, [seacrchInput])


  return (
    <div className="App">
      <div className={'countrySelector'}>
        <h1>GLOBAL COVID19 TRACKER</h1>
      </div>
      {status === 'error' && seacrchInput === "Global" ? "Something went wrong :( " :
        <>
          <InfoCards data={globalInfo} />
          <br></br>
          <Chart data={globalInfo} />
        </>

      }
      <br></br>
      <div className={'countrySelector'}>
        <h1>{seacrchInput === "" ? "GLOBAL" : seacrchInput.substring(10).toUpperCase()} COVID19 TRACKER</h1>
        <SearchForm seacrchInput={seacrchInput} setSearchInput={setSearchInput} />
      </div>
      {status === 'error' && seacrchInput !== "Global" ? "Something went wrong :( Try again. Check if you searched a valid country name" :
        <>
          <InfoCards data={info} searchInput={seacrchInput} />
          <br></br>
          <Chart data={info} searchInput={seacrchInput} />
        </>
      }
    </div>
  );
}

export default App;
