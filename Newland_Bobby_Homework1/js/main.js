/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */

Modernizr.load({
    test: Modernizr.canvas,
    yep: "js/success.js",
    nope: "js/fail.js",
    complete: function(){
        // this will run after the js file is loaded based on the case

        console.log("the test is complete");


    }
});


window.onload = function() {


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {
            ctx.strokeStyle = "black";
            ctx.lineWidth = 5;
            ctx.fillStyle ="blue";

            ctx.moveTo(0,0);
            ctx.fillRect(0,0,50,100);
            ctx.strokeRect(0,0,50,100);

        }
    }

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
    var theCanvas2 = document.getElementById('Canvas2');
    if (theCanvas2 && theCanvas2.getContext) {
        var ctx2 = theCanvas2.getContext("2d");
        if (ctx2) {
            ctx2.strokeStyle = "black";
            ctx2.lineWidth = 5;
            ctx2.fillStyle ="rgba(255,0,0,.5)";
            ctx2.beginPath();
            var degrees =360;
            radians = (degrees/180)*Math.PI;
            ctx2.arc(50,50,30,0,radians,false);
            ctx2.fill();
            ctx2.stroke();



        }
    }




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

    var theCanvas3 = document.getElementById('Canvas3');
    if (theCanvas3 && theCanvas3.getContext) {
        var ctx3 = theCanvas3.getContext("2d");
        if (ctx3) {
            ctx3.strokeStyle = "black";
            ctx3.lineWidth = 5;
            ctx3.fillStyle ="blue";

            ctx3.moveTo(100,100);
            ctx3.lineTo(-40,200);
            ctx3.lineTo(250,200);
            ctx3.lineTo(-20,50);
            ctx3.lineTo(200,500);
            ctx3.lineTo(100,50);
            ctx3.stroke();

        }
    }

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

    var theCanvas4 = document.getElementById('Canvas4');
    if (theCanvas4 && theCanvas4.getContext) {
        var ctx4 = theCanvas4.getContext("2d");
        if (ctx4) {
            ctx4.strokeStyle = "black";
            ctx4.lineWidth = 5;
            ctx4.fillStyle ="blue";

            ctx4.arc(200,150,100,1* Math.PI ,2*Math.PI,false);
            ctx4.bezierCurveTo(100,100,100,200,100,150);




            ctx4.stroke();



        }
    }


    /*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

    var theCanvas5 = document.getElementById('Canvas5');
    if (theCanvas5 && theCanvas5.getContext) {
        var ctx5 = theCanvas5.getContext("2d");
        if (ctx5) {
            ctx5.strokeStyle = "black";
            ctx5.lineWidth = 5;
            ctx5.fillStyle ="blue";

            ctx5.font="30pt Georgia";
            ctx5.fillText("This is some cool text",10,100);



        }
    }

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

    var theCanvas6 = document.getElementById('Canvas6');
    if (theCanvas6 && theCanvas6.getContext) {
        var ctx6 = theCanvas6.getContext("2d");
        if (ctx6) {
            ctx6.strokeStyle = "black";
            ctx6.lineWidth = 5;
            ctx6.fillStyle ="blue";
            var srcImg = document.getElementById("img1");

            ctx6.drawImage(srcImg,-300,0);
            ctx6.drawImage(srcImg,0,0,200,60);
            ctx6.drawImage(srcImg,100,20,100,20,20,200,100,20);



        }
    }



    /*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


    var theCanvas7 = document.getElementById('Canvas7');
    if (theCanvas7 && theCanvas7.getContext) {
        var ctx7 = theCanvas7.getContext("2d");
        if (ctx7) {
            ctx7.strokeStyle = "black";
            ctx7.lineWidth = 5;
            ctx7.fillStyle ="blue";


            ctx7.beginPath();
            ctx7.arc(200,150,100,1* Math.PI ,2*Math.PI,false);
//            ctx7.bezierCurveTo(100,100,100,200,100,150);
            var degrees =360;
            radians = (degrees/180)*Math.PI;
            ctx7.arc(50,50,30,0,radians,false);
            ctx7.arc(300,200,30,0,radians,false);
            ctx7.arc(120,200,30,0,radians,false);
            ctx7.fill();
            ctx7.stroke();
            ctx7.font="15pt Georgia";
            ctx7.fillText("This is a baby stroller",100,270);

        }
    }



};