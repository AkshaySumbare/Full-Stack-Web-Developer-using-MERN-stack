console.log("Hi This is Akshay Sumbare");

const API_KEY = "168771779c71f3d64106d8a88376808a";
const weatherId = document.querySelector("#weather");




//**************************Using City************************* */


function  renderWeatherInfonUI(data) {
    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(newPara);
}

async function showWeather() {
  try {
    let city = "Ahmadnagar";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log("Weather data:->", data);
    
    renderWeatherInfonUI(data);

    
  } catch (err) {
    console.log("Error Found", err);
  }
}

//***********************************Using lat and Long****************************************************** */

function renderWeatherInfonUI(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

  document.body.appendChild(newPara);
}
async function getCustomWeatherDetail() {
  try {
    let lat = 18.5204303;
    let lon = 73.8567437;

    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    let data = await result.json();
    console.log(data);

    renderWeatherInfonUI(data);
  } catch (err) {
    console.log("Error Found", err);
  }
}



function showPosition(position){
  let lat = position.coords.latitude;
  let longi = position.coords.longitude;
  
  console.log(lat);
  console.log(longi);
}


function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);

  }
  else{
    console.log("No geolocation Suppport ");
  }
}


