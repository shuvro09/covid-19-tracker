const FetchData = async ({ seacrchInput, setStatus }) => {
    // eslint-disable-next-line
    const keyword = seacrchInput === "Global" ? "" : seacrchInput
    const response = await fetch(`https://covid19.mathdro.id/api/${keyword}`)

    if (response.status !== 200) {
        console.log(response)
        setStatus("error")
        return ({})
    }
    else {
        const data = await response.json()
        setStatus("ok")
        return data
    }


}
export default FetchData;