function searchScholarships() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    const scholarshipList = document.getElementById('scholarshipList');
    const scholarships = scholarshipList.getElementsByClassName('scholarship');

    for (let i = 0; i < scholarships.length; i++) {
        const scholarship = scholarships[i];
        const text = scholarship.textContent || scholarship.innerText;

        if (text.toUpperCase().indexOf(input) > -1) {
            scholarship.style.display = '';
        } else {
            scholarship.style.display = 'none';
        }
    }
}

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