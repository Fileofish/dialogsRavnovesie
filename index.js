const button = document.createElement('button');
const icon = document.createElement('div');

button.className = 'quiz-plugin__button';
icon.className = 'quiz-plugin__button__icon';

button.addEventListener('click', () => alert('Hi!'));

button.append(icon);
document.body.prepend(button);

function setStyles() {
  const likeButton = document.querySelector(
    '.button-circle.button-circle_theme_white.favorite-state__button'
  );
  const buttonButton = document.querySelector('.quiz-plugin__button');

  setTimeout(() => {
    if (buttonButton) buttonButton.classList.add('visible');
  }, 0);

  console.log('likeButton', likeButton);
  if (likeButton && window.innerWidth > 1279) {
    const likeButtonRect = likeButton.getBoundingClientRect();
    const topPosition = likeButtonRect.top + window.pageYOffset;
    const rightPosition =
      document.documentElement.scrollWidth -
      (likeButtonRect.left + likeButtonRect.width + window.pageXOffset);

    buttonButton.style.width =
      buttonButton.style.height =
      buttonWrapper.style.height =
      buttonWrapper.style.width =
        likeButtonRect.width + 'px';

    buttonWrapper.style.top = topPosition + 'px';
    buttonWrapper.style.right =
      rightPosition +
      likeButtonRect.width +
      (0.625 * window.innerWidth) / 100 +
      'px';
  }
}

setStyles();

// const iframe = document.createElement('iframe');

// iframe.setAttribute('src', 'https://dialogsravnovesiedev.netlify.app/?title=111');
// iframe.style.width = '100%';
// iframe.style.height = '100%';
// iframe.style.position = 'fixed';
// iframe.style.top = '0';
// iframe.style.left = '0';
// iframe.style.border = 'none';
// iframe.style.zIndex = '1000';

// document.body.prepend(iframe);
