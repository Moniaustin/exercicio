var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display= "block";
}

function changeBackgroundColor(_previous) {
    var randomNumber = Math.floor((Math.random() * 5));
    
        while(randomNumber == _previous){
            var randomNumber = Math.floor((Math.random() * 5));
        }
    
    switch(randomNumber) {
        case 0:
            document.body.style.background = "#693EB0";
            break;
        case 1:
            document.body.style.background = "#8E44AD";
            break;
        case 2:
            document.body.style.background = "#4D2394";
            break;
        case 3:
            document.body.style.background = "#7B4FC1";
            break;
        case 4:
            document.body.style.background = "#674172";
            break;
        case 5:
            document.body.style.background = "#663399";
            break;
        default:
            break;
    }
    return randomNumber;
}

var previous;
function change() {
    previous = changeBackgroundColor(previous);
}

//function fadein(element) {
//    var op = 0.1;
//    element.style.display = "block";
//    var timer = setInterval(function() {
//        if(op >= 1) {
//            clearInterval(timer);
//        }
//        element.style.opacity = op;
//        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//        op += op * 0.05;
//    },10);
//} 