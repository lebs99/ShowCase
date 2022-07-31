function showModal(imgUrl){
    modalDisplay = document.getElementById("codeModal").style.display

    if (modalDisplay == 'none'){
        document.getElementById('modalimg').src = imgUrl
        document.getElementById('codeModal').style.display = "block";
    }
    else{
        document.getElementById('codeModal').style.display = "none";
        document.getElementById('modalimg').src = ""
    }
}

function showModal(modalID){
    modalDisplay = document.getElementById(modalID).style.display;

    if (modalDisplay == 'none'){
        document.getElementById(modalID).style.display = 'block'; 
    }
    else {
        document.getElementById(modalID).style.display = 'none'; 
    
    }
}

function  scrollImage(srcID, direction) {
    
    const FP = "file:///D:/programming/Portfolio/Resume/ProjectPages/VBA/images/"
    const images = [FP + "SubSubReg.png", FP + "AccDataEntry.png", FP + "AccEmplyee.png"];
    const currentImgIndex = images.indexOf(document.getElementById(srcID).src);
    console.log(currentImgIndex)
    if (direction == "next"){
        if (currentImgIndex == images.length - 1){
            document.getElementById(srcID).src = images[0];
        }
        else {
            document.getElementById(srcID).src = images[currentImgIndex + 1];
        }
    }
    else if (direction == "previous"){
        if (currentImgIndex == 0){
            document.getElementById(srcID).src = images[images.length - 1];
        }
        else {
            document.getElementById(srcID).src = images[currentImgIndex - 1];
        }
    }
}
