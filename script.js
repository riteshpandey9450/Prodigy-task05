let city=document.getElementById("city-name");
let temp=document.getElementById("temp");
let season=document.getElementById("season");
let input=document.getElementById("search-box");

let image=document.getElementById("img");
let API_KEY="ded768aa24e51668003f31d07be352cb";
const data=async function(search){
    const getData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
    console.log(getData);
    let jsonData= await getData.json();
    console.log(jsonData);-
    console.log(jsonData.name);

    if(jsonData.cod==400){
        alert("Please Enter Location");
        image.src="error1.png";
        city.innerHTML=" ";
    temp.innerHTML=" ";
    season.innerHTML=" ";

    }
     if(jsonData.cod == 404){
        alert("Please Enter Correct Location");
        image.src="error2.png";
    city.innerHTML=search;
    temp.innerHTML=" ";
    season.innerHTML=" ";
     }

    city.innerHTML=jsonData.name;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    season.innerHTML=jsonData.weather[0].main;

    let weatherCondition = jsonData.weather[0].main;
    season.innerHTML = weatherCondition;

    switch (weatherCondition.toLowerCase()) {
        case "clouds":
            image.src = "clouds.png";
            break;
        case "clear":
            image.src = "clears.png"; 
            break;
        case "rain":
            image.src = "rain.png";
            break;
        case "snow":
                image.src = "rn.jpg";
                break;
        case "haze":
            image.src = "storm.png";
            break;
    }
    input.value=" ";

    }
function myfun(){
    search=input.value;
    data(search);
}
