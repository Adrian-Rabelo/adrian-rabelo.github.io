let hidden = true;
function showImage() {
    hidden ? hidden = false : hidden = true;
    var img = document.getElementById('img');
    hidden ? img.style.visibility = "visible" : img.style.visibility = "hidden";
}