var positionX = 0;
var positionX2 = 0;
var positionX3 = 0;
var positionX4 = 0;
var positionX5 = 0;
var positionX6 = 0;
var positionX7 = 0;
var positionX8 = 0;
var positionY = 0;
var positionY2 = 0;
var positionY3 = 0;
var positionY4 = 0;
var positionY5 = 0;
var positionY6 = 0;
var positionY7 = 0;
var positionY8 = 0;
var velocityX = 50;
var velocityX2 = 100;
var velocityX3 = 150;
var velocityX4 = 200;
var velocityX5 = 250;
var velocityX6 = 300;
var velocityX7 = 350;
var velocityX8 = 400;
var velocityY = 50;
var velocityY2 = 100;
var velocityY3 = 150;
var velocityY4 = 200;
var velocityY5 = 250;
var velocityY6 = 300;
var velocityY7 = 350;
var velocityY8 = 450;
var reverseX = false;
var reverseX2 = false;
var reverseX3 = false;
var reverseX4 = false;
var reverseX5 = false;
var reverseX6 = false;
var reverseX7 = false;
var reverseX8 = false;
var reverseY = false;
var reverseY2 = false;
var reverseY3 = false;
var reverseY4 = false;
var reverseY5 = false;
var reverseY6 = false;
var reverseY7 = false;
var reverseY8 = false;
var Xmin = 0;
var Xmax = 1020;
var Ymin = 0;
var Ymax = 500;


var ball = document.getElementById('ball');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var ball4 = document.getElementById('ball4');
var ball5 = document.getElementById('ball5');
var ball6 = document.getElementById('ball6');
var ball7 = document.getElementById('ball7');
var ball7 = document.getElementById('ball7');



function ballMotion(){
    
    if (reverseX){
        positionX = positionX - velocityX;
        ball.style.left = positionX + 'px';
    }else{
        positionX = positionX + velocityX;
        ball.style.left = positionX + 'px';
    }
    if (reverseY){
        positionY = positionY - velocityY;
        ball.style.top = positionY + 'px';
    }else{
         positionY = positionY + velocityY;
         ball.style.top = positionY + 'px';
    }
    if(
        positionX > Xmax ||
        positionX === Xmin
    ){
        reverseX = !reverseX;}
    if(
        positionY > Ymax||
        positionY === Ymin
    ){
        reverseY = !reverseY;
    }
    
}
function ballMotion2(){
    
    if (reverseX2){
        positionX2 = positionX2 - velocityX2;
        ball2.style.left = positionX2 + 'px';
    }else{
        positionX2 = positionX2 + velocityX2;
        ball2.style.left = positionX2 + 'px';
    }
    if (reverseY2){
        positionY2 = positionY2 - velocityY2;
        ball2.style.top = positionY2 + 'px';
    }else{
         positionY2 = positionY2 + velocityY2;
         ball2.style.top = positionY2 + 'px';
    }
    if(
        positionX2 > Xmax ||
        positionX2 === Xmin
    ){
        reverseX2 = !reverseX2;}
    if(
        positionY2 > Ymax||
        positionY2 === Ymin
    ){
        reverseY2 = !reverseY2;}
    }
    function ballMotion3(){
    
        if (reverseX3){
            positionX3 = positionX3 - velocityX3;
            ball3.style.left = positionX3 + 'px';
        }else{
            positionX3 = positionX3 + velocityX3;
            ball3.style.left = positionX3 + 'px';
        }
        if (reverseY3){
            positionY3 = positionY3 - velocityY3;
            ball3.style.top = positionY3 + 'px';
        }else{
             positionY3 = positionY3 + velocityY3;
             ball3.style.top = positionY3 + 'px';
        }
        if(
            positionX3 > Xmax ||
            positionX3 === Xmin
        ){
            reverseX3 = !reverseX3;}
        if(
            positionY3 > Ymax||
            positionY3 === Ymin
        ){
            reverseY3 = !reverseY3;}
        }
        function ballMotion4(){
    
            if (reverseX4){
                positionX4 = positionX4 - velocityX4;
                ball4.style.left = positionX4 + 'px';
            }else{
                positionX4 = positionX4 + velocityX4;
                ball4.style.left = positionX4 + 'px';
            }
            if (reverseY4){
                positionY4 = positionY4 - velocityY4;
                ball4.style.top = positionY4 + 'px';
            }else{
                 positionY4 = positionY4 + velocityY4;
                 ball4.style.top = positionY4 + 'px';
            }
            if(
                positionX4 > Xmax ||
                positionX4 === Xmin
            ){
                reverseX4 = !reverseX4;}
            if(
                positionY4 > Ymax||
                positionY4 === Ymin
            ){
                reverseY4 = !reverseY4;}
            }
            function ballMotion5(){
    
                if (reverseX5){
                    positionX5 = positionX5 - velocityX5;
                    ball5.style.left = positionX5 + 'px';
                }else{
                    positionX5 = positionX5 + velocityX5;
                    ball5.style.left = positionX5 + 'px';
                }
                if (reverseY5){
                    positionY5 = positionY5 - velocityY5;
                    ball5.style.top = positionY5 + 'px';
                }else{
                     positionY5 = positionY5 + velocityY5;
                     ball5.style.top = positionY5 + 'px';
                }
                if(
                    positionX5 > Xmax ||
                    positionX5 === Xmin
                ){
                    reverseX5 = !reverseX3;}
                if(
                    positionY5 > Ymax||
                    positionY5 === Ymin
                ){
                    reverseY5 = !reverseY5;}
                }
                function ballMotion6(){
    
                    if (reverseX6){
                        positionX6 = positionX6 - velocityX6;
                        ball6.style.left = positionX6 + 'px';
                    }else{
                        positionX6 = positionX6 + velocityX6;
                        ball6.style.left = positionX6 + 'px';
                    }
                    if (reverseY6){
                        positionY6 = positionY6 - velocityY6;
                        ball6.style.top = positionY6 + 'px';
                    }else{
                         positionY6 = positionY6 + velocityY6;
                         ball6.style.top = positionY6 + 'px';
                    }
                    if(
                        positionX6 > Xmax ||
                        positionX6 === Xmin
                    ){
                        reverseX6 = !reverseX6;}
                    if(
                        positionY6 > Ymax ||
                        positionY6 === Ymin
                    ){
                        reverseY6 = !reverseY6;}
                    }
                    function ballMotion7(){
    
                        if (reverseX7){
                            positionX7 = positionX7 - velocityX7;
                            ball7.style.left = positionX7 + 'px';
                        }else{
                            positionX7 = positionX7 + velocityX7;
                            ball7.style.left = positionX7 + 'px';
                        }
                        if (reverseY7){
                            positionY7 = positionY7 - velocityY7;
                            ball7.style.top = positionY7 + 'px';
                        }else{
                             positionY7 = positionY7 + velocityY7;
                             ball7.style.top = positionY7 + 'px';
                        }
                        if(
                            positionX7 > Xmax ||
                            positionX7 === Xmin
                        ){
                            reverseX7 = !reverseX7;}
                        if(
                            positionY7 > Ymax||
                            positionY7 === Ymin
                        ){
                            reverseY7 = !reverseY7;}
                        }
                        function ballMotion8(){
    
                            if (reverseX8){
                                positionX8 = positionX8 - velocityX8;
                                ball8.style.left = positionX7 + 'px';
                            }else{
                                positionX8 = positionX8 + velocityX8;
                                ball8.style.left = positionX8 + 'px';
                            }
                            if (reverseY8){
                                positionY8 = positionY8 - velocityY8;
                                ball8.style.top = positionY8 + 'px';
                            }else{
                                 positionY8 = positionY8 + velocityY8;
                                 ball8.style.top = positionY8 + 'px';
                            }
                            if(
                                positionX8 > Xmax ||
                                positionX8 === Xmin
                            ){
                                reverseX8 = !reverseX7;}
                            if(
                                positionY8 > Ymax||
                                positionY8 === Ymin
                            ){
                                reverseY8 = !reverseY7;}
                            }

setInterval(ballMotion, 1300);
setInterval(ballMotion2, 1250);
setInterval(ballMotion3, 1200);
setInterval(ballMotion4, 1150);
setInterval(ballMotion5, 1100);
setInterval(ballMotion6, 1050);
setInterval(ballMotion7, 1000);
setInterval(ballMotion8, 950);