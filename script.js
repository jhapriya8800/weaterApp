// const apiKey = "d87d316a62437fc0491aa81468746af5";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiUl = "https://api.openweathermap.org/data/2.5/weather?%20&appid=d87d316a62437fc0491aa81468746af5"
let inputTxt = document.querySelector(".inputTxt");
let imgTag = document.querySelector(".imgTag");





  async function fetchData(city) {
    try{
        const res = await fetch(apiUl + "&q=" + city);
        const data = await res.json()
        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor( data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h"
    }
    catch(error){
        console.error("error",error)

    }
  }
   imgTag.addEventListener("click",()=>{
       fetchData( inputTxt.value);

   })
 





