const searchform = document.querySelector('.place-input');
const searchbox = document.querySelector('input');
const searchbtn = document.querySelector(".submitbtn");

let place = "";

const weatherdata = async() => {
        place = searchbox.value
        const apikey = "43fc115fd2a3a66099cce91a7c7aa281";
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=${apikey}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if(isNaN(place)){
                document.querySelector('.temp').style.display = "block";
                document.querySelector('.weather').style.display = "flex";
        }

        document.querySelector("h3").innerHTML = data.name;
        document.querySelector(".celcius").innerHTML = data.main.temp + "°C" ;
        document.querySelector(".humid").innerHTML = data.main.humidity + "%" ;
        document.querySelector(".windspeed").innerHTML = data.wind.speed + "kmph" ;

        let img = document.querySelector(".weather-img");
        let string = data.weather[0].main;
        img.src = `./images/${string}.png`;



}
searchform.addEventListener('submit', (e) => {
        e.preventDefault();
        weatherdata();
})