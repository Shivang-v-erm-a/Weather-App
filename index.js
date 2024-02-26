const temp = document.querySelector(".weather1");
const city = document.querySelector(".weather2 p");
const date = document.querySelector(".weather2 span");
// const emoji = document.querySelector(".weather3>p>img");
const climate = document.querySelector(".weather3 span");
const form = document.querySelector("form");
const search = document.getElementById("search");

let target = "";

const fetchData = async (target)=>{

    try{
    const url = `https://api.weatherapi.com/v1/current.json?key=55ba86d175f74b62b8c163553232911&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    updateDom(data.current.temp_c,data.location.name,data.location.localtime,data.current.condition.icon,data.current.condition.text);
    }
        
    catch{
        alert("Location Not Found !");
    }   

}

function updateDom(temperature,cityField,dateField,emojiField,climateField){
    temp.innerText = temperature+"°";
    city.innerText = cityField;
    date.innerText=  dateField;
    // emoji.src = emojiField;
    climate.innerText = climateField;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    target = search.value;
    fetchData(target);
});