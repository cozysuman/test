var AUTO_SLIDE_TIME = 4; // in seconds
var slideInterval;

var leftArrow = document.querySelector('.testimonials .carousel .left-arrow');
var rightArrow = document.querySelector('.testimonials .carousel .right-arrow');

var carousel = document.querySelector('.testimonials .carousel');
var carouselWrapper = document.querySelector('.testimonials .carousel-wrapper');

var contents = carouselWrapper.children;

var currentIndex = 0;
var contentsLength = contents.length;

var indicatorsContainer;
function createIndicators() {
  var indicatorsContainer = document.createElement('ul');
  indicatorsContainer.setAttribute('class', 'indicators');

  for (let i = 0; i < contents.length; i++) {
    var indicator = document.createElement('li');
    if (i == currentIndex) indicator.setAttribute('class', 'active');

    indicator.onclick = function() {
      currentIndex = i;
      slide();
    };

    indicatorsContainer.appendChild(indicator);
  }

  carousel.appendChild(indicatorsContainer);
}

function indicatorsUpdate() {
  var indicators = document.querySelector('.testimonials .indicators').children;
  for (let i = 0; i < contents.length; i++) {
    if (i == currentIndex) {
      indicators[i].setAttribute('class', 'active');
    } else {
      indicators[i].setAttribute('class', '');
    }
  }
}

function slide() {
  for (var i = 0; i < contents.length; i++) {
    const content = contents[i];

    if (i == currentIndex) {
      content.style.display = 'inline-block';
    } else {
      content.style.display = 'none';
    }
  }

  clearInterval(slideInterval);
  autoSlide();

  indicatorsUpdate();
}

leftArrow.onclick = function() {
  if (currentIndex == 0) {
    currentIndex = contentsLength - 1;
  } else {
    currentIndex--;
  }
  slide();
};

rightArrow.onclick = function() {
  if (currentIndex >= contentsLength - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  slide();
};

createIndicators();
slide();
autoSlide();

function autoSlide() {
  slideInterval = setInterval(function() {
    if (currentIndex >= contentsLength - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    slide();
  }, AUTO_SLIDE_TIME * 1000);
}
