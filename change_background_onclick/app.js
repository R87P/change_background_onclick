let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];

let button = document.querySelector('button');

button.addEventListener('click', function(){
// randomizer
    let randomColor = colors[Math.floor(Math.random() * colors.length)]

    let container = document.getElementById('container');

    container.style.background = randomColor;
})