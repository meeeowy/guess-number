let random = Math.floor(Math.random() * 100);
let check = document.getElementById("check");
let show = document.getElementById("show");

function style(){
    show.style.display = "block";
    show.style.backgroundColor = "red";
    show.style.color = "black";
}

check.onclick = function() {
    for (var i = 0; i < 10; i++){
        let guess = document.getElementById("guess").value;
        if (guess == random) {
            show.innerHTML = "you win";
            style()
            show.style.backgroundColor = "yellow";
        }
        else if (guess < random) {
            show.innerHTML = "Your number guess is small";
            style()
        }
        else if (guess > random) {
            show.innerHTML = "you guess is bigger";
            style()
        }
        else{
            show.innerHTML = "error";

        }
    }
}

let inp = document.getElementById("guess");
inp.onclick = function(){
    inp.style.opacity = "1";
}
inp.onmouseleave = function(){
    setTimeout(() => {
        inp.style.opacity = "0.5";
    }, 3000);
}