document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("drawingCanvas");
    var context = canvas.getContext("2d");
    var isDrawing = false;

    context.lineWidth = 3;
    context.lineJoin = "round";
    context.lineCap = "round";
    
    
    var colorPicker = document.getElementById("colorPicker");
    
    context.strokeStyle = colorPicker.value;

    
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    
    colorPicker.addEventListener("input", function() {
        context.strokeStyle = colorPicker.value;
    });

    function startDrawing(e) {
        isDrawing = true;
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function draw(e) {
        if (!isDrawing) return;
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
    }

    function stopDrawing() {
        isDrawing = false;
        context.closePath();
    }

    window.saveImage = function() {
        var image = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.href = image;
        link.download = 'drawing.png';
        link.click();
    };
});
