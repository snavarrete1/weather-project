function getJson(){
    let city = document.querySelector('#city').value;
    let zip = document.querySelector('#zip').value;
    document.querySelector('#city-title')

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zip}&appid=186a445ce8d24b03d24996a4ab982100&units=imperial`)
    .then(response => response.json())
    .then(rawData =>{
        console.log(rawData)

        let high = `${rawData.main.temp_max}\u00B0F`
        let display_high = document.createElement('w1')
        display_high.innerHTML = high
        document.querySelector('#high').append(display_high)


        let low = `${rawData.main.temp_min}\u00B0F`
        let display_low = document.createElement('w1')
        display_low.innerHTML = low
        document.querySelector('#low').append(display_low)


        let forecast = rawData.weather[0].main
        let display_forecast = document.createElement('w1')
        display_forecast.innerHTML = forecast
        document.querySelector('#forecast').append(display_forecast)

        let humidity = `${rawData.main.humidity}%`
        let display_humidity = document.createElement('w1')
        display_humidity.innerHTML = humidity
        document.querySelector('#humidity').append(display_humidity)
    })
}
function displayCity(){
    let city = document.querySelector('#city').value;
    let display_city = document.createElement('w2')
    display_city.innerHTML = city.charAt(0).toUpperCase()+ city.slice(1)
    document.querySelector('#city-title').append(display_city)
    
}




    