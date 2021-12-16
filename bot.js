const fetch = require("node-fetch");

function sliceDate(date) {           // Function that creates dictionary with date single components
    let dateDIC = {};
    dateDIC["year"] = date.toLocaleString('sv-SE', { timeZone: 'Europe/Tallinn' }).slice(0,4);
    dateDIC["month"] = date.toLocaleString('sv-SE', { timeZone: 'Europe/Tallinn' }).slice(5,7);
    dateDIC["day"] = date.toLocaleString('sv-SE', { timeZone: 'Europe/Tallinn' }).slice(8, 10);
    dateDIC["hour"] = date.toLocaleString('sv-SE', { timeZone: 'Europe/Tallinn' }).slice(11, 13);
    dateDIC["full"] = date.toLocaleString('sv-SE', { timeZone: 'Europe/Tallinn' }).slice(0, 16);
    return dateDIC;
}

async function getTempsForDays(city, days) {             // Function that creates dictionary with weather forecast

    const response4 = await fetch("http://api.weatherapi.com/v1/forecast.json?key=c4361f778f624ddeabb113901211512&q="    // Getting data via API
        + city + "&days=" + days+ "&aqi=no&alerts=no")

    let response5 = await response4.json()

    let firstDH = response5.forecast.forecastday[0].hour;      
    let secondDH = response5.forecast.forecastday[1].hour;
    let thirdDH = response5.forecast.forecastday[2].hour;

    let tempsDIC = {};
    
    for (let i of firstDH) {
        tempsDIC[i.time] = i.temp_c
    }
    for (let i of secondDH) {
        tempsDIC[i.time] = i.temp_c
    }
    for (let i of thirdDH) {
        tempsDIC[i.time] = i.temp_c
    }

    return tempsDIC;

}

async function getPricesForInterval(dateFrom, dateTo) {     // Function that creates dictionary with energy prices

    const response3 = await fetch("https://dashboard.elering.ee/api/nps/price?start="           // Getting data via API
        + dateFrom + "T00%3A00%3A00.000Z&end=" + dateTo + "T00%3A00%3A00.000Z")
        
    response2 = await response3.json();

    let estPrices = response2.data.ee;

    let pricesDIC = {};
    let pricesARR = [];

    for (let i of estPrices) {
        pricesDIC[new Date(i.timestamp * 1000).toLocaleString('sv-SE', { timeZone: 'Europe/Tallinn' }).slice(0, 16)] = i.price;
        pricesARR.push(i.price);
    }

    return pricesDIC;

}


// Function that creates array with weather conditions for 1 day
// (Used to be used on the step of data analysis)


// async function getHistoricalTemps(city, date) {

// const response = await fetch("http://api.weatherapi.com/v1/history.json?key=c4361f778f624ddeabb113901211512&q="+city+"&dt="+date);
// let response2 = await response.json()

// let dayH = await response2.forecast.forecastday[0].hour;

// let tempsDIC = {};
// let tempsARR = [];
        
// for (let i of dayH) {
//     tempsDIC[i.time] = i.temp_c
//     tempsARR.push(i.temp_c);
// }

// return tempsARR;

// }



// Function that creates array with temperatures and prices for 1 day
// (Used to be used on the step of data analysis)


// function oneDayArray(city, dateFrom, dateTo) {          
//     let excel = [];
//     let temps2 = [];
//     let prices2 = [];

//     getHistoricalTemps(city, dateFrom).then( (temps) =>{
//         for (let i of temps) {
//             temps2.push(i);
//         }
//     }).then( () => {
//         getPricesForInterval(dateFrom, dateTo).then( (prices) => {
//         for (let i of prices) {
//             prices2.push(i);
//         }
//     }).then(() => {
//         for (let i = 0; i < temps2.length; i++) {
//         excel.push(temps2[i]);
//         excel.push(prices2[i]);
//         }
//     }).then(console.log(excel))});        

// }

async function getPrices() {      // Function that creates dictionary with known electricity prices
                            // + predicted by our formulas (For Next 48h) 
    let finalDIC = {};
    let dates = [];

    let nowDate = new Date();
    let now = nowDate.toLocaleString('sv-SE', { timeZone: 'Europe/Tallinn' })
    let overmorDate = new Date();
    overmorDate = new Date(overmorDate.setDate(overmorDate.getDate()+2));
    let overmor = overmorDate.toLocaleString('sv-SE', { timeZone: 'Europe/Tallinn' });

    for (let i = 0; i < 48; i++) {
        dates.push(new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), nowDate.getHours()+i));
    }

    return getPricesForInterval(now.slice(0,10), overmor.slice(0,10))
        .then((temp) => {
            //console.log("temp")
            //console.log(temp)
            for (const [key, value] of Object.entries(temp)) {
                finalDIC[key] = value;
            }   
            return finalDIC;
        }).then((finalDIC) => {
            //console.log("finalDIC")
            //console.log(finalDIC)
            return getTempsForDays("Tallinn", "3")
                    .then((tempDIC) => {
                        for (let i = 0; i < dates.length; i++) {
                            if (finalDIC[sliceDate(dates[i])["full"]] == null) {
                                let hour = sliceDate(dates[i])["hour"];
                                let date = sliceDate(new Date(sliceDate(dates[i])["year"], 
                                                    sliceDate(dates[i])["month"]-1,
                                                    sliceDate(dates[i])["day"],
                                                    hour))["full"];

                                finalDIC[sliceDate(dates[i])["full"]] = Math.trunc(formulas[hour](tempDIC[date]) * 100) / 100;
                            }
                        }
                        //console.log(finalDIC)
                        return finalDIC;
                    })
            });

    

}

let formulas = {"00":(a) => {return Math.exp(-0.041*a)*127.97},      // Dictionary with analysed formulas (Watch Excel for more info)
    "01":(a) => {return Math.exp(-0.02*a)*117.32},
    "02":(a) => {return Math.exp(-0.021*a)*116.33},
    "03":(a) => {return Math.exp(-0.093*a)*66.556},
    "04":(a) => {return Math.exp(-0.043*a)*119.19},
    "05":(a) => {return Math.exp(-0.039*a)*181.17},
    "06":(a) => {return Math.exp(-0.033*a)*219.05},
    "07":(a) => {return Math.exp(-0.034*a)*230.71},
    "08":(a) => {return Math.exp(-0.036*a)*228.95},
    "09":(a) => {return Math.exp(-0.028*a)*242.95},
    "10":(a) => {return Math.exp(-0.038*a)*223.38},
    "11":(a) => {return Math.exp(-0.039*a)*224.48},
    "12":(a) => {return Math.exp(-0.054*a)*210.12},
    "13":(a) => {return Math.exp(-0.045*a)*228.05},
    "14":(a) => {return Math.exp(-0.027*a)*259.83},
    "15":(a) => {return Math.exp(-0.03*a)*268.59},
    "16":(a) => {return Math.exp(-0.03*a)*276.66},
    "17":(a) => {return Math.exp(-0.034*a)*260.31},
    "18":(a) => {return Math.exp(-0.049*a)*186.73},
    "19":(a) => {return Math.exp(-0.075*a)*138.88},
    "20":(a) => {return Math.exp(-0.077*a)*129.94},
    "21":(a) => {return Math.exp(-0.039*a)*133.75},
    "22":(a) => {return Math.exp(-0.037*a)*111.74},
    "23":(a) => {return Math.exp(-0.104*a)*68.795}
}

//oneDayArray("Tallinn", "2021-12-08", "2021-12-09");
//getHistoricalTemps("Tallinn", "2021-12-10");
//getHistoricalTemps("Tallinn", "2021-12-11");
//getTempsForDays("Tallinn", 3);

//getTempsForDays("Tallinn", "3").then((a)=> {console.log(a)})
//getPricesForInterval("2021-12-15", "2021-12-16").then((a)=> {console.log(a)})
//getPrices().then((a) => {console.log(a)})

module.exports  = {getPrices,formulas};
