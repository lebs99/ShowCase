function showContent(event, showId, parentClass, activateClass, hideAllContent=false) {
    //make the clicked item active
    //display the element with the id of "project"
    //create all of the variables
    var i, hideContent, parentObject;

    if (hideAllContent == true && document.getElementById(showId).className.includes("active") == true) {
        document.getElementById(showId).className = activateClass;
        document.getElementById(showId).style.display = "none";
        return;
    }
    
    //set all of the project Contents display to hidden
    parentObject = document.getElementsByClassName(activateClass);
    for (i = 0; i < parentObject.length; i++) {
        parentObject[i].style.display = "none";
        parentObject[i].className = parentObject[i].className.replace(" active", "");
    }

    //set all of the project Tabs to inactive
    if (parentClass != "") {
        hideContent = document.getElementsByClassName(parentClass);
        for (i = 0; i < hideContent.length; i++) {
            hideContent[i].className = hideContent[i].className.replace(" active", "");
        }
        event.currentTarget.className += " active"
    }

    //set the values for the selected elements
    document.getElementById(showId).className += " active";
    document.getElementById(showId).style.display = "block";
}

window.onscroll = function () {
    if (window.innerWidth < 900) {
       if (document.documentElement.scrollTop > 313) {
            document.getElementById("containerHeader").style.position = "relative";
            document.getElementById("containerHeader").style.top = "313px";
            document.getElementById("containerHeader").style.left = "0px";
            document.getElementById("containerHeader").style.right = "0px";
        }else {
            document.getElementById("containerHeader").style.position = "fixed";
            document.getElementById("containerHeader").style.top = "10px";
            document.getElementById("containerHeader").style.left = "10px";
            document.getElementById("containerHeader").style.right = "10px";
        }
    }
}

window.onresize = function () {
    if (window.innerWidth > 900) {
        document.getElementById("containerHeader").style.position = "fixed";
        document.getElementById("containerHeader").style.top = "0px";
        document.getElementById("containerHeader").style.left = "10px";
        document.getElementById("containerHeader").style.right = "10px";
    }
}

function pickTheme(bgMainColor, bgSecondaryColor, bgTerciaryColor=bgSecondaryColor, bgHoverColor, textMainColor, textSecondaryColor, textHoverColor) {
    var setVariable = document.documentElement.style
    
    setVariable.setProperty("--bgmaincolor", bgMainColor)
    setVariable.setProperty("--bgsecondarycolor", bgSecondaryColor)
    setVariable.setProperty("--bgterciarycolor", bgTerciaryColor)
    setVariable.setProperty("--bghovercolor", bgHoverColor)
    setVariable.setProperty("--textmaincolor", textMainColor)
    setVariable.setProperty("--textsecondarycolor", textSecondaryColor)
    setVariable.setProperty("--texthovercolor", textHoverColor)
    document.getElementById("headerLine").color = textHoverColor;   
}

function changeTheme(sheet){
    document.getElementById("pageTheme").setAttribute("href",sheet);
}