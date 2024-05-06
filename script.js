const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cd532e70cfmshf20a9a49b40c093p1f1074jsnc6c5b0f5e65a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //   cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = convertUnixToHumanReadable(response.sunrise);
      sunset.innerHTML = convertUnixToHumanReadable(response.sunset);

      console.log(response);
    })

    .catch((err) => console.log(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");

function convertUnixToHumanReadable(unixTimestamp) {
  // Create a new Date object using the timestamp (multiply by 1000 to convert to milliseconds)
  const date = new Date(unixTimestamp * 1000);

  // Extract hours, minutes, and seconds from the Date object
  const hours = ("0" + date.getHours()).slice(-2); // Ensure two digits, add leading zero if needed
  const minutes = ("0" + date.getMinutes()).slice(-2); // Ensure two digits, add leading zero if needed
  const seconds = ("0" + date.getSeconds()).slice(-2); // Ensure two digits, add leading zero if needed

  // Format the time as HH:MM:SS
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
}


    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + "Moscow",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        temp3.innerHTML = response.temp;
        wind_speed3.innerHTML = response.wind_speed;
        humidity3.innerHTML = response.humidity;
      })
      .catch((err) => console.log(err));
 

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + "Melbourne",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          temp4.innerHTML = response.temp;
          wind_speed4.innerHTML = response.wind_speed;
          humidity4.innerHTML = response.humidity;
        })
        .catch((err) => console.log(err));

    fetch(
            "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + "London",
            options
          )
            .then((response) => response.json())
            .then((response) => {
              temp5.innerHTML = response.temp;
              wind_speed5.innerHTML = response.wind_speed;
              humidity5.innerHTML = response.humidity;
            })
            .catch((err) => console.log(err));

    fetch(
                "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + "New York",
                options
              )
                .then((response) => response.json())
                .then((response) => {
                  temp6.innerHTML = response.temp;
                  wind_speed6.innerHTML = response.wind_speed;
                  humidity6.innerHTML = response.humidity;
                })
                .catch((err) => console.log(err));

