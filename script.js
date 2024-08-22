function increaseScore(teamName) {
    const scoreId = `score${teamName}`;
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.textContent);
    scoreElement.textContent = ++score
}

function decreaseScore(teamName) {
    const scoreId = `score${teamName}`;
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.textContent);
    if(score > 0) {
        scoreElement.textContent = --score;
    } else {
        alert("Skor 0'dan küçük olamaz");
    }
}

function setNamePrompt(teamName) {
    const name = prompt("Takım ismini giriniz");
    document.getElementById(`team${teamName}`).getElementsByTagName("h2")[0].textContent = name;
}

function setScorePrompt(teamName) {
    const score = prompt("Gol sayısını giriniz :");
    if (!isNaN(score) && score !==null) {
        const scoreNum = parseInt(score)
        if(Number.isInteger(scoreNum) && scoreNum >= 0) {
            document.getElementById(`score${teamName}`).textContent = scoreNum
        } else {
            alert("Lütfen geçerli bir değer giriniz");
        }
    } else {
        alert("Giriş iptal edildi veya geçersiz bir değer girildi");
    }
}

document.getElementById("resetButtonA").addEventListener("click" , function() {
    document.getElementById("scoreA").innerText = "0";
});

document.getElementById("resetButtonB").addEventListener("click" , function() {
    document.getElementById("scoreB").innerText = "0";
});