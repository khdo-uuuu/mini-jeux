const mots = ["chaton", "fleur", "bonbon", "lune", "câlin"];
const mot = mots[Math.floor(Math.random() * mots.length)];
let motCache = Array(mot.length).fill("_");
let essaisRestants = 6;
let lettresDevinees = [];

const affichageMot = document.getElementById("motCache");
const message = document.getElementById("message");

affichageMot.textContent = motCache.join(" ");

function deviner() {
  const input = document.getElementById("lettre");
  const lettre = input.value.toLowerCase();
  input.value = "";
  
  if (!lettre || lettre.length !== 1 || lettresDevinees.includes(lettre)) return;

  lettresDevinees.push(lettre);

  if (mot.includes(lettre)) {
    for (let i = 0; i < mot.length; i++) {
      if (mot[i] === lettre) {
        motCache[i] = lettre;
      }
    }
    affichageMot.textContent = motCache.join(" ");
    if (!motCache.includes("_")) {
      message.textContent = "🎉 Bravo ! Tu as deviné le mot 💖";
    }
  } else {
    essaisRestants--;
    if (essaisRestants === 0) {
      message.textContent = `😿 Perdu ... le mot était "${mot}"`;
      document.querySelector("button").disabled = true;
    } else {
      message.textContent = `Essaie encore ! Il te reste ${essaisRestants} essai(s) 😬`;
    }
  }
}
