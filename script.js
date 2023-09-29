const banner = document.getElementById('#banner');

// Fade in the female character
const femaleCharacter = document.querySelector('.female-character');
femaleCharacter.style.opacity = 0;
femaleCharacter.style.transform = 'translateX(-200%) translateY(-50%)';
femaleCharacter.style.transition = 'opacity 1s ease-in';

setTimeout(() => {
    femaleCharacter.style.opacity = 1;
    femaleCharacter.style.transform = 'translateX(-50%) translateY(-50%)';
}, 1500);

// Slide in the headline1 from the left
const headline1 = document.querySelector('.headline1');
headline1.style.opacity = 0;
headline1.style.transform = 'translateX(-100%) translateY(-50%)';
headline1.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';

setTimeout(() => {
    headline1.style.opacity = 1
  headline1.style.transform = 'translateX(-50%) translateY(-50%)';
}, 2000);

// Fade out the female character and slide out the headline1
setTimeout(() => {
    femaleCharacter.style.opacity = 0;
    femaleCharacter.style.transition = 'opacity 0.5s ease-out';
    headline1.style.opacity = 0;
    headline1.style.transform = 'translateX(-100%) translateY(-50%)';
    headline1.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
}, 5000);

// Slide in the headline2 from the right
const headline2 = document.querySelector('.headline2');
headline2.style.opacity = 0;
headline2.style.transform = 'translateX(60%) translateY(-50%)';
headline2.style.transition = 'opacity 1.5s ease-in, transform 0.5s ease-in';

setTimeout(() => {
    headline2.style.opacity = 1;
  headline2.style.transform = 'translateX(-50%) translateY(-50%)';
}, 5500);

// Fade in the subheadline
const subheadline = document.querySelector('.subheadline');
subheadline.style.opacity = 0;
subheadline.style.transform = 'translateX(-200%) translateY(-50%)';
subheadline.style.transition = 'opacity 1s ease-in';

setTimeout(() => {
    subheadline.style.opacity = 1;
    subheadline.style.transform = 'translateX(-50%) translateY(-50%)';
}, 6000);

// Fade in the Learn More button
const learnMoreBtn = document.querySelector('.learnmore-btn');
learnMoreBtn.style.opacity = 0;
learnMoreBtn.style.transform = 'translateX(-200%) translateY(-50%)';
learnMoreBtn.style.transition = 'opacity 1s ease-in';

setTimeout(() => {
    learnMoreBtn.style.opacity = 1;
    learnMoreBtn.style.transform = 'translateX(-50%) translateY(-50%)';
}, 6500);

// Slide in the logo from the right
const logo = document.querySelector('.logo');
logo.style.opacity = 0;
logo.style.transform = 'translateX(30%) translateY(-50%)';
logo.style.transition = 'opacity 1s ease-in, transform 0.5s ease-in';

setTimeout(() => {
    logo.style.opacity = 1;
  logo.style.transform = 'translateX(-50%) translateY(-50%)';
}, 6500);

// Fade in the replay button
const replayBtn = document.querySelector('.replay-btn');
replayBtn.style.opacity = 0;
replayBtn.style.transform = 'translateX(-200%) translateY(-50%)';
replayBtn.style.transition = 'opacity 1s ease-in';

setTimeout(() => {
    replayBtn.style.opacity = 1;
    replayBtn.style.transform = 'translateX(-50%) translateY(-50%)';
}, 7000);


replayBtn.addEventListener('click', () => {
  window.location.reload('#banner');
});

