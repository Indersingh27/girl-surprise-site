// Images for slideshows
const herImg = [
  "images/her1.jpg", "images/her2.jpg", "images/her3.jpg", 
  "images/her4.jpg", "images/her5.jpg", "images/her6.jpg", "images/her7.jpg"
];

const thingsImg = [
  "images/thing1.jpg", "images/thing2.jpg", "images/thing3.jpg", 
  "images/thing4.jpg", "images/thing5.jpg", "images/thing6.jpg"
];

const foodImg = [
  "images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg"
];

const singersImg = [
  "images/singer1.jpg", "images/singer2.jpg", "images/singer3.jpg"
];

// Setup slideshow function
function setupSlideshow(elId, arr){
  const el = document.getElementById(elId);
  let idx = 0;
  el.innerHTML = `
    <img src="${arr[0]}" /> <br>
    <button onclick="prev('${elId}')">Prev</button>
    <button onclick="next('${elId}')">Next</button>
  `;
  window[elId+'Idx'] = idx;
  window[elId+'Arr'] = arr;
}

function next(id){
  window[id+'Idx']++;
  const arr = window[id+'Arr'];
  if(window[id+'Idx'] >= arr.length) window[id+'Idx'] = 0;
  document.getElementById(id).querySelector('img').src = arr[window[id+'Idx']];
}

function prev(id){
  window[id+'Idx']--;
  const arr = window[id+'Arr'];
  if(window[id+'Idx'] < 0) window[id+'Idx'] = arr.length - 1;
  document.getElementById(id).querySelector('img').src = arr[window[id+'Idx']];
}

// Initialize all slideshows
setupSlideshow('her-slideshow', herImg);
setupSlideshow('things-slideshow', thingsImg);
setupSlideshow('food-slideshow', foodImg);
setupSlideshow('singers-slideshow', singersImg);

// Music button toggle play/pause
document.getElementById('music-btn').onclick = function() {
  var audio = document.getElementById('audio');
  if(audio.paused) audio.play();
  else audio.pause();
}

// Floating Hearts and Hello Kitty
const floatImages = [
  "images/heart1.png", // small pink heart image file in public/images/
  "images/kitty1.png"  // small Hello Kitty png file in public/images/
];

function createFloater() {
  const img = document.createElement('img');
  img.src = floatImages[Math.floor(Math.random() * floatImages.length)];
  img.className = 'floater-img';

  // Random horizontal start position
  img.style.left = (Math.random() * 95) + 'vw';

  // Random size between 28px and 40px
  const size = Math.random() * 12 + 28;
  img.style.width = size + 'px';

  // Random animation duration between 4s and 7s
  const duration = Math.random() * 3 + 4;
  img.style.animationDuration = duration + 's';

  // Start from bottom of screen
  img.style.top = '100vh';

  document.getElementById('floaters').appendChild(img);

  // Remove after animation completes
  setTimeout(() => {
    img.remove();
  }, duration * 1000);
}

// Generate floating hearts and kitty every 350ms
setInterval(createFloater, 350);
