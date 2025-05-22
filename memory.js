const emojis = ["🐱", "🍓", "🌸", "🧁", "🐰", "🍰", "🍒", "🌈"];
let cards = [...emojis, ...emojis]; // paires
cards = cards.sort(() => 0.5 - Math.random());

const game = document.getElementById("memory-game");
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;

cards.forEach((emoji) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.emoji = emoji;
  card.textContent = "❓";

  card.addEventListener("click", () => {
    if (lockBoard || card.classList.contains("flipped") || card === firstCard) return;

    card.classList.add("flipped");
    card.textContent = emoji;

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lockBoard = true;

      if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matches++;

        if (matches === emojis.length) {
          document.getElementById("message").textContent = "🎉 Bravo ! T’as gagné ! ";
        }

        reset();
      } else {
        setTimeout(() => {
          firstCard.textContent = "❓";
          secondCard.textContent = "❓";
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          reset();
        }, 1000);
      }
    }
  });

  game.appendChild(card);
});

function reset() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
