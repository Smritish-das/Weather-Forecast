let weather = {
    apikey: "bd183e14ac8a4035ac8135806230205",
    fetchWeather: function(city){
        fetch( 
            "https://api.weatherapi.com/v1/forecast.json?key=bd183e14ac8a4035ac8135806230205&q="+ city + "&days=7&aqi=no&alerts=no"

        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        
        
        document.querySelector(".city").innerText = "Weather in " + data.location.name;
        document.querySelector(".icon").src = data.current.condition.icon ;
        document.querySelector(".description").innerText = data.current.condition.text;
        document.querySelector(".temp").innerText = data.current.temp_c + "°C";
        document.querySelector(".humidity").innerText = " Humidity : " + data.current.humidity + "%";
        document.querySelector(".wind").innerText=" Wind Speed : " + data.current.wind_kph + "K/H";


       
        document.querySelector(".d1").innerText="Date : " + data.forecast.forecastday[0].date ;
        document.querySelector(".t1").innerText="Average Temperature : " + data.forecast.forecastday[0].day.avgtemp_c  ;
       
       
        document.querySelector(".i1").src = data.forecast.forecastday[0].day.condition.icon ;
       
       
        document.querySelector(".de1").innerText = data.forecast.forecastday[0].day.condition.text;
        document.querySelector(".hu1").innerText = " Humidity : " + data.forecast.forecastday[0].day.avghumidity + "%";
        document.querySelector(".w1").innerText=" Wind Max : " + data.forecast.forecastday[0].day.maxwind_kph + "K/H";


        document.querySelector(".d2").innerText="Date : " + data.forecast.forecastday[1].date ;
        document.querySelector(".t2").innerText="Average Temperature : " + data.forecast.forecastday[1].day.avgtemp_c  ;
        document.querySelector(".i2").src = data.forecast.forecastday[1].day.condition.icon ;
        document.querySelector(".de2").innerText = data.forecast.forecastday[1].day.condition.text;
        document.querySelector(".hu2").innerText = " Humidity : " + data.forecast.forecastday[1].day.avghumidity + "%";
        document.querySelector(".w2").innerText=" Wind Max : " + data.forecast.forecastday[1].day.maxwind_kph + "K/H";

        document.querySelector(".d3").innerText="Date : " + data.forecast.forecastday[2].date ;
        document.querySelector(".t3").innerText="Average Temperature : " + data.forecast.forecastday[2].day.avgtemp_c  ;
        document.querySelector(".i3").src = data.forecast.forecastday[2].day.condition.icon ;
        document.querySelector(".de3").innerText = data.forecast.forecastday[2].day.condition.text;
        document.querySelector(".hu3").innerText = " Humidity : " + data.forecast.forecastday[2].day.avghumidity + "%";
        document.querySelector(".w3").innerText=" Wind Max : " + data.forecast.forecastday[2].day.maxwind_kph + "K/H";

        document.querySelector(".d4").innerText="Date : " + data.forecast.forecastday[3].date ;
        document.querySelector(".t4").innerText="Average Temperature : " + data.forecast.forecastday[3].day.avgtemp_c  ;
        document.querySelector(".i4").src = data.forecast.forecastday[3].day.condition.icon ;
        document.querySelector(".de4").innerText = data.forecast.forecastday[3].day.condition.text;
        document.querySelector(".hu4").innerText = " Humidity : " + data.forecast.forecastday[3].day.avghumidity + "%";
        document.querySelector(".w4").innerText=" Wind Max : " + data.forecast.forecastday[3].day.maxwind_kph + "K/H";

        document.querySelector(".d4").innerText="Date : " + data.forecast.forecastday[3].date ;
        document.querySelector(".t4").innerText="Average Temperature : " + data.forecast.forecastday[3].day.avgtemp_c  ;
        document.querySelector(".i4").src = data.forecast.forecastday[3].day.condition.icon ;
        document.querySelector(".de4").innerText = data.forecast.forecastday[3].day.condition.text;
        document.querySelector(".hu4").innerText = " Humidity : " + data.forecast.forecastday[3].day.avghumidity + "%";
        document.querySelector(".w4").innerText=" Wind Max : " + data.forecast.forecastday[3].day.maxwind_kph + "K/H";


        document.querySelector(".d5").innerText="Date : " + data.forecast.forecastday[4].date ;
        document.querySelector(".t5").innerText="Average Temperature : " + data.forecast.forecastday[4].day.avgtemp_c  ;
        document.querySelector(".i5").src = data.forecast.forecastday[4].day.condition.icon ;
        document.querySelector(".de5").innerText = data.forecast.forecastday[4].day.condition.text;
        document.querySelector(".hu5").innerText = " Humidity : " + data.forecast.forecastday[4].day.avghumidity + "%";
        document.querySelector(".w5").innerText=" Wind Max : " + data.forecast.forecastday[4].day.maxwind_kph + "K/H";

        document.querySelector(".d6").innerText="Date : " + data.forecast.forecastday[5].date ;
        document.querySelector(".t6").innerText="Average Temperature : " + data.forecast.forecastday[5].day.avgtemp_c  ;
        document.querySelector(".i6").src = data.forecast.forecastday[5].day.condition.icon ;
        document.querySelector(".de6").innerText = data.forecast.forecastday[5].day.condition.text;
        document.querySelector(".hu6").innerText = " Humidity : " + data.forecast.forecastday[5].day.avghumidity + "%";
        document.querySelector(".w6").innerText=" Wind Max : " + data.forecast.forecastday[5].day.maxwind_kph + "K/H";




        
    },

        search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

};

document
.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});

weather.fetchWeather("Guwahati")
