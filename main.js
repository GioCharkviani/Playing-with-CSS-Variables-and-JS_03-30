var borderColor = document.getElementById("border-color");
var changeSpacing = document.getElementById("change-spacing");
var changeBlur = document.getElementById("change-blur");
var img = document.querySelector("img");

var selectedColor = "black";
var selectedSpacing = 10;

borderColor.addEventListener("change", function() {
    selectedColor = borderColor.value;
    img.style.border = selectedSpacing + 'px solid ' + selectedColor;
});

changeSpacing.addEventListener("mousemove", function() {
    selectedSpacing = changeSpacing.value;
    img.style.border = selectedSpacing + 'px solid ' + selectedColor;
});

changeBlur.addEventListener("mousemove", function() {
    var selectedBlur = changeBlur.value;
    img.style.filter = 'blur(' + selectedBlur + 'px)';
});