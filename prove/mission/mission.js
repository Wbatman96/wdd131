
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#696969";
        document.getElementById("image").src = "byui-logo-white.png";
        document.body.style.color = "white";
        document.getElementById("byui").style.color = "lightblue"
    } else {
        document.body.style.backgroundColor = "white";
        document.getElementById("image").src = "byui-logo-blue.webp";
        document.body.style.color = "black";
        document.getElementById("byui").style.color = "#035f9c"
    }
}           
                    






