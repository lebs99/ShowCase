window.onload = function () {
    try{
        document.getElementById("sliderContainer").style.height = document.getElementById("slider").offsetHeight + 8 + "px";
    }catch{
        console.log("slider doesnt exist")
    }
}

function moveSlider(event) {
    //set the end location of the slide before redirection to the new page
    const containerWidth = document.getElementById("sliderContainer").offsetWidth - 3
    let id = null;
    const slider = document.getElementById("slider");
    clearInterval(id);
    let pos = 0;
    id = setInterval(slideRight,3);
    function slideRight() {
        if (pos >= containerWidth - slider.offsetWidth - 11){
            clearInterval(id);
            window.open('#','_self');
        }else{
            pos++;
            slider.style.left = pos + "px";
        }
    }
}

window.onresize = function () {
    document.getElementById("sliderContainer").style.height = document.getElementById("slider").offsetHeight + 8 + "px";
}