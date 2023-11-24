
/* calculator */
function calculateLove() {
    const yourName = document.getElementById('yourName').value;
    const partnerName = document.getElementById('partnerName').value;

    const lovePercentage = Math.floor(Math.random() * 101);

    let result = '';
    if (lovePercentage > 80) {
        result = 'Wow! You are made for each other!';
    } else if (lovePercentage > 50) {
        result = 'Not bad! There is potential.';
    } else {
        result = 'Hmm... Maybe you need to work on it.';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `${yourName} and ${partnerName} have a ${lovePercentage}% love compatibility. ${result}`;
}

/* music */
 const audio = document.getElementById('myAudio');


 document.addEventListener('click', function () {
audio.play();
}); 







