// console.log("working"); // check connetion
//TODO GENERATE HTML VIA LOOP

// const next_btn = document.getElementById("btn1");
// const random_btn = document.getElementById("btn2");
const block_btn = document.getElementsByClassName("block");

//* SELECTS RANDOM NUMBER FROM 1-9
function next_random() {
    clearCell();
    let random_index = Math.ceil(Math.random() * 9);
    console.log(random_index);
    document.getElementById("nr_" + random_index).style.background = "red";
    Math.floor(Math.random() * 9);
}

function clearCell() {
    for (let index = 1; index <= 9; index++) {
        document.getElementById("nr_" + index).style.background = "grey";
    }
}

//! DOES NOT START FROM RANDOM NUMBER
//! AFTER RANDOM DOES NOT WORK NEXT BTN
//! DOES NOT START FROM 1 AFTER HITTING
//TODO IF NUMBER NEXT REACHES 9 START FROM 1 AGAIN
let index = 0;
function next_red() {
    if (index <= 9) {
        index++;
        document.getElementById("nr_" + index).style.background = "red";
        clearOneCell();
    } else if (index === 10 && index >= 10) {
        index = 0;
        clearOneCell();
    }
}

let indexGrey = -1;
function clearOneCell() {
    indexGrey++;
    document.getElementById("nr_" + indexGrey).style.background = "grey";
}

// elevator saga yra toks game
