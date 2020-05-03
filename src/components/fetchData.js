// function formatDate(date) {
//     console.log(date)
//     const a = date.split('/')
//     let mm = a[0]
//     let dd = a[1]
//     const yyyy = a[2]
//     if (mm < 10)
//         mm = '0' + mm
//     if (dd < 10)
//         dd = '0' + dd
//     return [yyyy, mm, dd].join('-')
// }

const FetchCountryData = async ({ country, setStatus, status }) => {
    // eslint-disable-next-line
    if (country) {

        try {
            const response = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
            const data = await response.json()
            setStatus({ ...status, countryData: 'ok' })
            return data.splice(data.length - 30, data.length)

        }
        catch {
            setStatus({ ...status, countryData: 'error' })
            return ([])
        }
    }
    return null
}
const FetchSummary = async ({ setStatus, status }) => {
    try {
        const response = await fetch('https://api.covid19api.com/summary')
        const data = await response.json()
        setStatus({ ...status, summaryData: 'ok' })
        return data
    }
    catch (error) {
        console.log(error)
        setStatus({ ...status, summaryData: 'error' })
        return ({})

    }
}
export { FetchSummary, FetchCountryData };