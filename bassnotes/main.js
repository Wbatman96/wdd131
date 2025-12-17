const flashcards = [
    { image: "images/a2.png", answer: "A" },
    { image: "images/a3.png", answer: "A" },
    { image: "images/b2.png", answer: "B" },
    { image: "images/b3.png", answer: "B" },
    { image: "images/c2.png", answer: "C" },
    { image: "images/c4.png", answer: "C" },
    { image: "images/d3.png", answer: "D" },
    { image: "images/e2.png", answer: "E" },
    { image: "images/e3.png", answer: "E" },
    { image: "images/f2.png", answer: "F" },
    { image: "images/f3.png", answer: "F" },
    { image: "images/g2.png", answer: "G" },
    { image: "images/g3.png", answer: "G" }
];

flashcards.forEach(card => {
    card.seen = false;
});

const start_button = document.getElementById('start');
const next_button = document.getElementById('next');
const back_button = document.getElementById('back');
const answer_text = document.getElementById('note_answer');

let noteIndex = 0;
let quiz_started = false;

/* create answer button */
const answer_button = document.createElement("button");
answer_button.textContent = "Show Answer";


function updateImage() {
    document.getElementById('cardimage').src = flashcards[noteIndex].image;
    flashcards[noteIndex].seen = true;
};

function hideAnswer() {
    document.getElementById('note_answer').innerHTML = " ";
    answer_button.textContent = "Show Answer";
};

function showAnswer() {
    answer_text.textContent = flashcards[noteIndex].answer;
    answer_text.style.display = "block";
    answer_button.textContent = "Hide Answer";
};

function trackProgress() {
    document.getElementById('progress_text').innerHTML = ("Card " + (noteIndex + 1) + " of " + flashcards.length);
    document.getElementById('progress').style.display = "block";
    answer_button.textContent = "Show Answer";
};

function checkCompletion() {
    const allSeen = flashcards.every(card => card.seen);
    if (allSeen) {
        document.getElementById('progress_text').innerHTML += " — Complete!";
    }
};

/* start button */
start_button.addEventListener('click', function () {
    for (let i = flashcards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = flashcards[i];
        flashcards[i] = flashcards[j];
        flashcards[j] = k;
    };
    flashcards.forEach(card => {
        card.seen = false;
    });
    noteIndex = 0;
    updateImage();
    trackProgress();
    hideAnswer();
    quiz_started = true;

    start_button.style.display = "none";
    document.getElementById('flashcard').appendChild(answer_button);
    document.getElementById('question').innerHTML = "What is the name of this note?";
});

/* next button */
next_button.addEventListener('click', function () {
    if (quiz_started) {
        noteIndex++;
        if (noteIndex >= flashcards.length) {
            noteIndex = 0;
        }

        updateImage();
        trackProgress();
        checkCompletion();
        hideAnswer();
    }
});

/* back button */
back_button.addEventListener('click', function () {
    if (quiz_started) {
        noteIndex--;
        if (noteIndex < 0) {
            noteIndex = flashcards.length - 1;
        }

        updateImage();
        trackProgress();
        checkCompletion();
        hideAnswer();
    }
});

/* toggle answer */
answer_button.addEventListener('click', function () {
    if (document.getElementById('note_answer').innerHTML === " ") {
        showAnswer();
    } else {
        hideAnswer();
    };
});
