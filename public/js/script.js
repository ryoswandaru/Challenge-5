const playerBatu = document.getElementsByClassName('batu');
const playerKertas = document.getElementsByClassName('kertas');
const playerGunting = document.getElementsByClassName('gunting');
const comBatu = document.getElementsByClassName('combatu');
const comKertas = document.getElementsByClassName('comkertas');
const comGunting = document.getElementsByClassName('comgunting');




function getComChoise() {
    const com = Math.random();
    if (com < 0.34) return "gunting";
    if (com >= 0.34 && com > 0.67) return "batu";
    return "kertas";
}


function getResult(com, player) {

    if (player == com) return "DRAW";
    if (player == "gunting") return (com == "kertas") ? "PLAYER 1 WIN" : "COM WIN";
    if (player == "kertas") return (com == "gunting") ? "COM WIN" : "PLAYER 1 WIN";
    if (player == "batu") return (com == "gunting") ? "PLAYER 1 WIN" : "COM WIN";
}

const pbatu = document.querySelector(".batu")
pbatu.addEventListener("click", function() {
    const comChoise = getComChoise();
    const playerChoise = pbatu.className;
    const result = getResult(comChoise, playerChoise);
    console.log("com : " + comChoise);
    const comSide = document.querySelector('.comBatu'); // Pilihan Computer Side
    comSide.setAttribute('src', 'assets/image/' + comChoise + '.png'); // Pilihan Computer Side
    // console.log( "player : " + playerChoise);
    // console.log( "result : " + result);
    const info = document.querySelector('.Versus')
    info.innerHTML = result
});

const pkertas = document.querySelector(".kertas")
pkertas.addEventListener("click", function() {
    const comChoise = getComChoise();
    const playerChoise = pkertas.className;
    const result = getResult(comChoise, playerChoise);
    console.log("com : " + comChoise);
    const comSide = document.querySelector('.comKertas'); // Pilihan Computer Side
    comSide.setAttribute('src', 'assets/image/' + comChoise + '.png'); // Pilihan Computer Side
    // console.log( "player : " + playerChoise);
    // console.log( "result : " + result);
    const info = document.querySelector('.Versus')
    info.innerHTML = result
});

const pgunting = document.querySelector(".gunting")
pgunting.addEventListener("click", function() {
    const comChoise = getComChoise();
    const playerChoise = pgunting.className;
    const result = getResult(comChoise, playerChoise);
    console.log("com : " + comChoise);
    const comSide = document.querySelector('.comGunting'); // Pilihan Computer Side
    comSide.setAttribute('src', 'assets/image/' + comChoise + '.png'); // Pilihan Computer Side
    // console.log( "player : " + playerChoise);
    // console.log( "result : " + result);
    const info = document.querySelector('.Versus')
    info.innerHTML = result
});

// Reload
function Refresh() {
    location.reload();
}

function goBack() {
    window.history.back();
}