let getPuzzle = (wordcount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", (e) => {
        if(e.target.readyState === 4 && e.target.status === 200){
            resolve(JSON.parse(e.target.responseText).puzzle)
        } else if (e.target.readyState === 4) {
            reject("REEEE")
        }
    })
    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordcount}`)
    request.send()
})
    

// let getCountry = async (cc) => {
//     let response = await fetch("http://restcountries.eu/rest/v2/all")

//     if(response.status === 200){
//         let data = await response.json()
//         return data.find(c => c.alpha2Code === cc).name
//     } else {
//         throw new Error("REEEE")
//     }
// }

// let getGeoLocation = async () => {
//     let response = await fetch("https://ipinfo.io/json?/token=76ecec95c77684")
//         if(response.status === 200){
//             return response.json()
//         } else {
//             throw new Error("REEEE")
//         }
// }

// let getCurrentCountry = async () => {
//     let response = await getGeoLocation()
//     return getCountry(response.country)
// }