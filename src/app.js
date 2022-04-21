let apiKey = "2f6c0570b02743f6b440bec23aa5a698";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&lat={lat}&lon={lon}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
