let myFavFruit = 'Apple';
let i = 5;
function Game() {
    let answer = document.getElementById('inpt').value;
    let oupt = document.getElementById('oupt');

    while (i >= 1) {
        if (answer.toUpperCase() === myFavFruit.toUpperCase()) {
            oupt.innerHTML = '';
            oupt.innerHTML = `<div class="text-2xl">You Won ${i * 10} Points</div>`;
            oupt.innerHTML+=`Please Reload Page to Play Again `;

            i = 0;
            break;
        }
        else if(answer.toUpperCase() !== myFavFruit.toUpperCase()) {
            if (i === 1) {
                i--;
                oupt.innerHTML = `<div class="text-2xl"> You Loose Please Reload Page to Play Again </div>`;
                break;
            }
            else{
                oupt.innerHTML = `<div class="text-2xl">Wrong Answer Try Again!!</div>`;
                i--;
                break;
                
            }
        }

    }

    document.getElementById('chance').innerHTML = `${i}`;
}