var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

var close = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(e) {
    console.log(e);
    if(e.target == modal) {
        modal.style.display = "none";
    }
};