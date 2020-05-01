import React, { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import InfoCards from './components/InfoCards'
import './App.css';

function App() {
  const [seacrchInput, setSearchInput] = useState("")
  const [info, setInfo] = useState({})
  // eslint-disable-next-line
  useEffect(() => { fetchData() }, [seacrchInput])
  const fetchData = async () => {
    const response = await fetch(`https://covid19.mathdro.id/api/${seacrchInput}`)
    const data = await response.json()
    setInfo(data)
    console.log(info)
  }
  return (
    <div className="App">
      <h2>{seacrchInput === "" ? "global" : seacrchInput.substring(10)} covid19 data</h2>
      <SearchForm seacrchInput={seacrchInput} setSearchInput={setSearchInput} />
      <InfoCards data={info} />
    </div>
  );
}

export default App;
