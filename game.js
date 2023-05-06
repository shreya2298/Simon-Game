var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern = [];

//$(function(){
    $(".btn").click(function() {
        //alert("Hrloo");
        var userChosenColour = $(this).attr("id");
        console.log(userChosenColour);
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        
        nextSequence();
    });
//});
function nextSequence(){
var randomnumber=Math.floor((Math.random() * 4));
console.log(randomnumber);

var randomChosenColour=buttonColors[randomnumber];
gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
console.log("sounds/"+randomChosenColour+".mp3");
var audio=new Audio("sounds/"+randomChosenColour+".mp3");
audio.play();
}
