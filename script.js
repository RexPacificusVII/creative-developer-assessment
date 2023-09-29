// Fade in the female character
const femaleCharacter = document.querySelector('.female-character');
femaleCharacter.style.opacity = 0;
femaleCharacter.style.transition = 'opacity 0.5s ease-in';

setTimeout(() => {
  femaleCharacter.style.opacity = 1;
}, 1500);

// Slide in the headline1 from the left
const headline1 = document.querySelector('.headline1');
headline1.style.transform = 'translateX(-150%) translateY(-50%)';

setTimeout(() => {
  headline1.style.transform = 'translateX(-50%) translateY(-50%)';
}, 2000);

// Fade out the female character and slide out the headline1
setTimeout(() => {
    femaleCharacter.style.opacity = 0;
    femaleCharacter.style.transition = 'opacity 0.5s ease-out';
  headline1.style.transform = 'translateX(-150%) translateY(-50%)';
}, 3000);

// Slide in the headline2 from the right
const headline2 = document.querySelector('.headline2');
headline2.style.transform = 'translateX(150%) translateY(-50%)';

setTimeout(() => {
  headline2.style.transform = 'translateX(-50%) translateY(-50%)';
}, 3500);

// Fade in the subheadline
const subheadline = document.querySelector('.subheadline');
subheadline.style.opacity = 0;
femaleCharacter.style.transition = 'opacity 0.5s ease-in';

setTimeout(() => {
  subheadline.style.opacity = 1;
}, 4000);

// Fade in the Learn More button
const learnMoreBtn = document.querySelector('.learnmore-btn');
learnMoreBtn.style.opacity = 0;
femaleCharacter.style.transition = 'opacity 0.5s ease-in';

setTimeout(() => {
  learnMoreBtn.style.opacity = 1;
}, 4500);

// Slide in the logo from the right
const logo = document.querySelector('.logo');
logo.style.transform = 'translateX(150%) translateY(-50%)';

setTimeout(() => {
  logo.style.transform = 'translateX(-50%) translateY(-50%)';
}, 5000);

// Fade in the replay button
const replayBtn = document.querySelector('.replay-btn');
replayBtn.style.opacity = 0;
femaleCharacter.style.transition = 'opacity 0.5s ease-in';

setTimeout(() => {
  replayBtn.style.opacity = 1;
}, 6000);

// Add a click event listener to the replay button to restart the animation
replayBtn.addEventListener('click', () => {
  // Refresh the banner only
  window.location.reload('#banner');
});
