function Age(month,day,year){
  this.month = month;
  this.day = day;
  this.year = year;
}

Age.prototype.ageInSeconds = function(){
  var ageSeconds = new Date(this.age);
}

exports.ageModule = Age;

/
//planet orbit for one Earth year
let mercury = 0.241
let venus = 0.615
let mars = 1.881
let jupiter = 11.86
let saturn = 29.46
let uranus = 84.01
let neptune = 164.8
let pluto = 248.6
//age/planet year = age on planet
//life expectancy for 2018
let usa = 79
let japan = 86
let france = 82
let mexico = 78
let spain = 82
let canada = 82
