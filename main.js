// let weather = {
//   apiKey: "1e32f989fd14e648f943adf84688d633",
//   fetchWeather: function (city) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//         city +
//         "&units=metric=" +
//         this.apiKey
//     )
//       .then((response) => {
//         response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   },
// };
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=London&appid=1e32f989fd14e648f943adf84688d633`
).then((res) => {
  console.log(res);
});
