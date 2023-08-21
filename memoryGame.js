let set1 = new Set();
let set2 = new Set();

let activeCards = 0;
let firstBtn;
let secondBtn;

const startBtn = document.getElementById('start-btn');
const startPage = document.getElementById('start-page');
const gamePage = document.getElementById('game-page');

startBtn.addEventListener('click', () => {
    startPage.style.display = 'none';
    gamePage.style.display = 'flex';
    const values = generateRandomValues();
    for (let i = 0; i < values.length; i++) {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.dataset.value = values[i];
        newCard.addEventListener('click', selectCard);
        gamePage.appendChild(newCard);
    }
});

function generateRandomValues() {
    while(set1.size < 6) {
        set1.add(Math.floor(Math.random() * 6) + 1);
    };
    while(set2.size < 6) {
        set2.add(Math.floor(Math.random() * 6) + 1);
    };
    const array1 = Array.from(set1);
    const array2 = Array.from(set2);

    return array1.concat(array2);
}


function selectCard(e) {
    const selectedBtn = e.target;
    if (activeCards === 0) {
        activeCards++;
        selectedBtn.innerHTML = `${selectedBtn.dataset.value}`;
        firstBtn = selectedBtn;
    } else if (activeCards === 1) {
        activeCards++;
        selectedBtn.innerHTML = `${selectedBtn.dataset.value}`;
        secondBtn = selectedBtn;
        setTimeout(() => {
            if (firstBtn.dataset.value === secondBtn.dataset.value) {
                activeCards = 0;
            } else {
                firstBtn.innerHTML = '';
                secondBtn.innerHTML = '';
                activeCards = 0;
            }
        }, "1500");
    }
}

