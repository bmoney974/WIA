/**
 * Created with JetBrains PhpStorm.
 * User: bobbynewland
 * Date: 4/29/14
 * Time: 11:50 PM
 * To change this template use File | Settings | File Templates.
 */
Modernizr.load({
    test: Modernizr.inputtypes.date,
    yep: "js/success.js",
    nope: "js/fail.js",
    complete: function(){
        // this will run after the js file is loaded based on the case

        console.log("the test is complete");


    }
});

window.onload=function(){
    //link to video
    vid = document.getElementById("vid")
};

function pauseToggle(){  // video controls
    //test video and determine if it is paused

    // . paused boolean property

    if(vid.paused){
        //play the video

        vid.play();

    }else{
        // pause the video

        vid.pause();
    }


}

function fastForward(){
    // currentTime = current play time in seconds

    // jump ahead 2 seconds when clicked

    vid.currentTime +=2;
}

function rew(){
    // currentTime = current play time in seconds

    // jump ahead 2 seconds when clicked

    vid.currentTime -=2;


}// onload end

var theCanvas = document.getElementById('Canvas1'); // canvas 1
if (theCanvas && theCanvas.getContext) {
    var ctx = theCanvas.getContext("2d");
    if (ctx) {

        // create a variable to hold image

        var srcImg = document.getElementById("img1");

        //draw image directly on to canavas

        ctx.drawImage(srcImg,0,0);






    }
}


var theCanvas2= document.getElementById('Canvas2');  // canvas 2
if (theCanvas2 && theCanvas2.getContext) {
    var ctx2 = theCanvas2.getContext("2d");
    if (ctx2) {

        // create a variable to hold image

        var srcImg2 = document.getElementById("img2");

        //draw image directly on to canavas

        ctx2.drawImage(srcImg2,0,0);






    }
}


$(document).ready(function(){

    $(".get-a-quote").hide();


    $(".btn-primary").click(function(){

        $(".get-a-quote").show(500);


    })

    $(".get-a-quote p").click(function(){

        $(".get-a-quote").hide(500);


    })

    $("#Canvas2").mouseenter(function(){
        $(this).css({"width":"600px", "height":"500px","right":"150px"});
    });

    $("#Canvas2").mouseleave(function(){
        $(this).css({"width":"370px", "height":"300px","right":"0px"});
    });



});

