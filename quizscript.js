document.getElementsByClassName('container')[0].style.display = "block";

function next(id) {
    document.getElementsByClassName('container')[id - 1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";
}

function submit() {
    var score = 0;
    if (document.getElementById('c1').checked) {
        score++;
    }
    if (document.getElementById('c2').checked) {
        score++;
    }
    if (document.getElementById('c3').checked) {
        score++;
    }
    document.getElementById('ans').innerHTML = "Your Score is: " + score;
}
