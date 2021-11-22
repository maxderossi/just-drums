//Event with CLICK
window.addEventListener("click", playDrums);
//Event with KEYDOWN
window.addEventListener("keydown", playDrumsAscii);
//Event Transitions 
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

//Functions >
//Play audio with CLICK
function playDrums(e) {
  const audio = document.querySelector(
`audio[data-key=${e.path[0].dataset.key}]`
  );
  const key = document.querySelector(`.key[data-key=${e.path[0].dataset.key}]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

//Play audio with ASCII CHARACTERS
function playDrumsAscii(e){
  const audio = document.querySelector(`audio[data-num="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-num="${e.keyCode}"]`)
        
  if(!audio) return; 
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

//Transition
function removeTransition(e) {
    if (e.propertyName === "transform") return;
    this.classList.remove("playing");
  }




