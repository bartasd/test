const meh = document.getElementById("button");
const login = document.querySelector(".login")
const gameboard = document.querySelector(".gameboard");
gameboard.classList.add('invisible');

function changeDOM()
{
    gameboard.classList.remove('invisible');
    login.classList.add('invisible');
}

meh.addEventListener('click', changeDOM);
