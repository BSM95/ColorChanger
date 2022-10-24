const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'A', 'B', 'C', 'D', 'E', 'F'
];
const btn = document.getElementById('mainBtn');


btn.addEventListener('click', generateColorsInHex);

// generate colors based on hex notation.
function generateColorsInHex(){
    let color = '#';

    for(let i = 0; i < 6; i++){

        color += colors[getRandomHex()];
    }

    document.body.style.backgroundColor = color;
    document.querySelector('.color').innerText = color;
    

}

// generate random numbers from 0 to 15

function getRandomHex(){
    return Math.floor(colors.length * Math.random());
}




// generate colors based on rgb notation.

// function generateColorsInRGB(){
//     let dig1= getRandomRGB();
//     let dig2 = getRandomRGB();
//     let dig3 = getRandomRGB();

//     document.body.style.backgroundColor = `rgb(${dig1}, ${dig2}, ${dig3})`;
//     document.querySelector('.color').innerText = `rgb(${dig1}, ${dig2}, ${dig3})`;
// }


// function getRandomRGB(){
//     return Math.floor(Math.random() * 256);
// }
