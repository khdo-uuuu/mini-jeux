const nombreSecret = Math.floor(Math.random() * 100) + 1;

function verifier() {
  const input = document.getElementById("guessInput").value;
  const resultat = document.getElementById("resultat");
  const guess = Number(input);

  if (!guess || guess < 1 || guess > 100) {
    resultat.textContent = "⛔ Nombre invalide !";
    return;
  }

  if (guess === nombreSecret) {
    resultat.textContent = "🎉 Bravooooooo !! C'est le bon nombre !";
    resultat.style.color = "green";
  } else if (guess < nombreSecret) {
    resultat.textContent = "🔼 Trop petit !";
    resultat.style.color = "orange";
  } else {
    resultat.textContent = "🔽 Trop grand !";
    resultat.style.color = "red";
  }
}
