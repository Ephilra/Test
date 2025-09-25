function showMessage(response) {
  const r = String(response || '').trim().toLowerCase();

  if (r === 'nein' || r === 'no') {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Dein Text:
    document.getElementById("question").textContent =
      "Nice Try! Aber der Nein-Button ist nur ein visueller Effekt 😉";

    // Falls hidden-messages existieren: ausblenden
    const noMsg = document.getElementById("no-message");
    if (noMsg) noMsg.style.display = "none";
    const yesMsg = document.getElementById("yes-message");
    if (yesMsg) yesMsg.style.display = "none";

    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.style.display = "none";
  }

  if (r === 'ja' || r === 'yes') {
    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.remove();
    const noBtn = document.getElementById("no-button");
    if (noBtn) noBtn.remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Ich freue mich schon auf unser erstes Date :)";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    const yesBtn = document.getElementById("yesButton");
    if (yesBtn) yesBtn.remove();

    const noMsg = document.getElementById("no-message");
    if (noMsg) noMsg.style.display = "none";
    const yesMsg = document.getElementById("yes-message");
    if (yesMsg) yesMsg.style.display = "none";
  }
}
