const blackBall = document.getElementById("black_ball");
const siteContainer = document.getElementById("site");
const slides = document.querySelectorAll(".slide");
const progressContainer = document.getElementById("progressContainer");

// Funzione per spostare la pallina
function updateBall(index) {
  const steps = document.getElementsByClassName("step");
  
  if(index === 0){
    progressContainer.style.opacity = "0";
      progressContainer.style.pointerEvents = "none";
  } else {
    progressContainer.style.opacity = "1";
      progressContainer.style.pointerEvents = "auto";
  }
  
  const stepIndex = index - 1
  const targetStep = steps[stepIndex];

  if (targetStep) {
    // Leggo dove si trova il centro della pallina vuota
    const position = targetStep.offsetLeft;
    // Lo assegno alla pallina nera
    blackBall.style.left = position + "px";
  }
}

// Funzione per il click (Sposta pallina + Sposta pagina)
function moveBall(stepIndex) {
  const slideIndex = stepIndex;
  if (slides[slideIndex]) {
    slides[slideIndex].scrollIntoView({ behavior: "smooth" });
  }
}

// Ascolto quando avviene lo scroll della pagina e sposto la pallina
siteContainer.addEventListener("scroll", function() {
  const currentIndex = Math.round(siteContainer.scrollTop / window.innerHeight);
  updateBall(currentIndex);
});