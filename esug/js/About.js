function pays() {
    var s=document.getElementById("terms");
    
        s.style.visibility = "visible";
}
function led() {
    var s=document.getElementById("terms");
    
        s.style.visibility = "hidden";
}


function med() {
    var s=document.getElementById("med");
    if (s.style.display === "block") {
        s.style.display = "none";
    } else {
        s.style.display= "block";
    }
}

function bar() {
    var s=document.getElementById("aside");
    if (s.style.display === "block") {
        s.style.display = "none";
    } else {
        s.style.display= "block";
    }
}
