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
     x[i].style.opacity = "0";  
  }
  x[slideIndex-1].style.opacity= "1";
}


function changeBackgroundColor(_previous) {
    var randomNumber = Math.floor((Math.random() * 4));
    
        while(randomNumber == _previous){
            var randomNumber = Math.floor((Math.random() * 4));
        }
    
    switch(randomNumber) {
        case 0:
            document.body.style.background = "#FFE4EC";
            break;
        case 1:
            document.body.style.background = "#F6DAE9";
            break;
        case 2:
            document.body.style.background = "#EEEEEE";
            break;
        case 3:
            document.body.style.background = "#FFFFFF";
            break;
        case 4:
            document.body.style.background = "#FEE9EA";
            break;
        case 5:
            document.body.style.background = "#EBEBEB";
            break;
        default:
            break;
    }
    return randomNumber;
}

function changetxtboxtorandomsize() {
    var randomNumber1 = Math.floor((Math.random() * 25) + 10);
    var randomNumber2 = Math.floor((Math.random() * 15) + 5);
    
    var txtbox = document.getElementsByClassName('txtbox');
    txtbox[0].style.width = (randomNumber1.toString() + 'em');
    txtbox[0].style.height = (randomNumber2.toString() + 'em');
}



var previous;
function change() {
    previous = changeBackgroundColor(previous);
}


function changeTxtBoxSize() {
    var txtbox = document.getElementsByClassName('txtbox');
    txtbox.style('width') = '25em';
    txtbox.style('height') = '25em';
}


$('.leftbtn').on('click', function() {
    $('.txtbox').toggle(1000);
});


$('.rightbtn').on('click', function() {
    $('.txtbox').toggle(1000);
});


//function showDivs(n) {
//    var i;
//    var x = document.getElementsByClassName(".img1");
//    if (n > x.length) {
//        slideIndex = 1
//    }
//    if (n < 1) {
//        slideIndex = x.length
//    }
//    for (i = 0; i < x.length; i++) {
//        x[i].style.opacity = 0;
//    }
//    x[slideIndex - 1].style.opacity = 1;
//}


//
//$('.leftbtn').on('click', function() {
//    $('h1').addClass('h1');
//});


//$('.leftbtn').on('click', function() {
//    $('.img2').show(){
//    });
//$('.leftbtn').on('click', function() {
//    $('.img1').hide(){
//    });



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



