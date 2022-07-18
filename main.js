x = 0;
y = 0;
draw_rect = "";
draw_circle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening you may speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "System identified your fancy words to be: " + content;
    if(content == "circle") {
        x = Math.floor(Math.round() * 900);
        y = Math.floor(Math.round() * 600);
        document.getElementById("status").innerHTML = "Your CirClE has started being drawn";
        draw_circle = "set";
    }
    if(content == "rect") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Your ReCtAnGlE has started being drawn";
        draw_rect = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
         circle(x, y, radius);
         document.getElementById("status").innerHTML = "Your CirCle had been drawn.";
         draw_circle = "";
    }
    if(draw_circle == "set") {
         rect(x, y, 70, 50);
         document.getElementById("status").innerHTML = "Your RecTanGLe had been drawn.";
         draw_rect = "";
    }

}