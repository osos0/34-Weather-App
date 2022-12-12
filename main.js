const inputEl = document.querySelector(".input");
const searchEl = document.querySelector(".fa-sharp");
const h4El = document.querySelector("h4");
const DegreeEl = document.querySelector(".Degree");
const skyEl = document.querySelector(".medial-div");
const HumidityEl = document.querySelector(".Humidity");
const windEl = document.querySelector(".Wind");

searchEl.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&appid=1e32f989fd14e648f943adf84688d633`
  )
    .then((res) => {
      let mydata = res.json();
      console.log(mydata);
      return mydata;
    })
    .then((mydata) => {
      const myObject = {
        name: mydata.name,
        temp: Math.ceil(mydata.main.temp - 273.15),
        humidity: mydata.main.humidity,
        wind: mydata.wind["speed"],
        description: mydata.weather[0]["description"],
      };

      h4El.innerHTML = `Wether in ${myObject.name}`;
      DegreeEl.innerHTML = `${myObject.temp} °C`;
      skyEl.innerHTML = `<i class="fa-solid fa-cloud"></i> ${myObject.description}`;
      HumidityEl.innerHTML = `Humidity: ${myObject.humidity}%`;
      windEl.innerHTML = `Wind: ${myObject.wind}Km/h`;
    });
  inputEl.value = ``;
});
