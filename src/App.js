import React, { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
// import InfoCards from './components/InfoCards'
import Chart from './components/Chart';
import './App.css';

function App() {
  const [seacrchInput, setSearchInput] = useState("")
  const [info, setInfo] = useState({})
  const [status, setStatus] = useState("ok")
  // eslint-disable-next-line
  useEffect(() => { fetchData() }, [seacrchInput])
  const fetchData = async () => {
    const response = await fetch(`https://covid19.mathdro.id/api/${seacrchInput}`)

    if (response.status !== 200) {
      console.log(response)
      setStatus("error")
      return
    }
    else {
      const data = await response.json()
      setInfo(data)
      setStatus("ok")
    }


  }
  return (
    <div className="App">
      <div className={'countrySelector'}>
        <h1>{seacrchInput === "" ? "GLOBAL" : seacrchInput.substring(10).toUpperCase()} COVID19 TRACKER</h1>
        <SearchForm seacrchInput={seacrchInput} setSearchInput={setSearchInput} />
      </div>
      {status === 'error' ? "Something went wrong :(. Try again" : <>
        {/* <InfoCards data={info} /> */}
        <Chart data={info} /></>}
    </div>
  );
}

export default App;
