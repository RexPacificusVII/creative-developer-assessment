// Preloading function
function preloadImages(images) {
  var promises = [];
  for (var i = 0; i < images.length; i++) {
    promises.push(new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = images[i];
    }));
  }
  return Promise.all(promises);
}

// Animation function
function animateBanner() {
  // Fade in female character
  TweenLite.to('.female-character', 1, {opacity: 1});

  // Slide in headline1 from the left
  TweenLite.to('.headline1', 1, {transform: 'translateX(0)', opacity: 1});

  // Fade out female character and headline1
  TweenLite.to('.female-character', 1, {opacity: 0, delay: 2});
  TweenLite.to('.headline1', 1, {transform: 'translateX(-100%)', opacity: 0, delay: 2});

  // Slide in headline2 from the right
  TweenLite.to('.headline2', 1, {transform: 'translateX(0)', opacity: 1, delay: 3});

  // Fade in subheadline and learn more button
  TweenLite.to('.subheadline', 1, {opacity: 1, delay: 4});
  TweenLite.to('.learnmore-btn', 1, {opacity: 1, delay: 4});

  // Fade in logo and replay button
  TweenLite.to('.logo', 1, {opacity: 1, delay: 5});
  TweenLite.to('.replay-btn', 1, {opacity: 1, delay: 5});
}

// Replay function
function replayBanner() {
  // Reset all animations
  TweenLite.set('.female-character', {opacity: 0});
  TweenLite.set('.headline1', {transform: 'translateX(-100%)', opacity: 0});
  TweenLite.set('.headline2', {transform: 'translateX(100%)', opacity: 0});
  TweenLite.set('.subheadline', {opacity: 0});
  TweenLite.set('.learnmore-btn', {opacity: 0});
  TweenLite.set('.logo', {opacity: 0});
  TweenLite.set('.replay-btn', {opacity: 0});

  // Start animation again
  animateBanner();
}

// Add event listener to replay button
document.querySelector('.replay-btn').addEventListener('click', replayBanner);

// Preload all images
preloadImages([
  'background.png',
  'female-character.png',
  'headline1.png',
  'headline2.png',
  'subheadline.png',
  'learnmore.png',
  'logo.png',
  'replay.png'
]).then(function() {
  // Start animation when all images are preloaded
  animateBanner();
});
