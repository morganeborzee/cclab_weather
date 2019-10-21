// Weather Api

let temperature = 0;
let weather = "";

let json;

function preload() {
  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&APPID=56754d7e3d91611a9b2faf911afcf696";
  json = loadJSON(url);

}

function setup() {
  createCanvas(500, 300);

  temperature = json.main.temp;
  weather = json.weather[0].description;
}

function draw() {
  background(255);
  fill(0);


  text("City: New York", 10, 50);
  text("Temperature: " + temperature, 10, 70);
  
  if(temperature<21){
    fill(0,10,255);
    noStroke();
  circle(200,50,20);
  } else {
      fill(0,10,255);
    noStroke();
  }
  
}