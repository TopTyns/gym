//slider
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider').forEach((el) => {
        ItcSlider.getOrCreateInstance('.itc-slider', {
            loop: false, 
            swipe: false,
        });
    });
});

//burger
$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header-nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});

//calculate
function calculate(){
  var bmi;
  var result = document.getElementById("result");

  var weight = parseInt(document.getElementById("weight").value);
  document.getElementById("weight-val").textContent = weight + " кг";

  var height = parseInt(document.getElementById("height").value);
  document.getElementById("height-val").textContent = height + " см";

  bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
  result.textContent = bmi;

  if(bmi < 18.5){
      category = "Недостатня вага";
      result.style.color = "#ffc44d";
  }
  else if( bmi >= 18.5 && bmi <= 24.9 ){
      category = "Нормальна вага";
      result.style.color = "#0be881";
  }
  else if( bmi >= 25 && bmi <= 29.9 ){
      category = "Надмірна вага";
      result.style.color = "#ff884d";
  }
  else{
      category = "Ожиріння";
      result.style.color = "#e8120b";
  }
  document.getElementById("category").textContent = category;
}