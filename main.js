canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouse_event = "empty";
var last_position_of_x , last_position_of_y;

var color = "black";
var width = 10;

canvas.addEventListener("mouseDown", my_mouse_down);

function my_mouse_down(e){
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseMove", my_mouse_move);

function my_mouse_move(e){
    current_position_of_x = e.clientX - offsetLeft;
    current_position_of_y = e.clientY - offsetTop;
    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = width;
        console.log("x = "+last_position_of_x, "y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

}

    canvas.addEventListener("mouseUp", my_mouse_up);

    function my_mouse_up (es) {
        mouse_event = "mouseUp";
    }






