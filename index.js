const iframeUrl = 'https://dialogsravnovesiedeviframe.netlify.app';
const currentScript = 'script1';

function checkLastElementAndLocateIframe() {
  const iframeWrapper = document.querySelector('.quiz-plugin__iframe-wrapper');
  var lastChild = document.body.lastElementChild;

  if (iframeWrapper !== lastChild) {
    document.body.appendChild(iframeWrapper);
  }
}
function createIframeHideButton(button) {
  const iframeWrapper = document.querySelector('.quiz-plugin__iframe-wrapper');
  const overlay = document.querySelector('.quiz-plugin__overlay');

  button.classList.remove('visible');
  button.classList.add('hidden');
  iframeWrapper.classList.remove('hidden');
  overlay.classList.remove('hidden');

  setTimeout(() => {
    iframeWrapper.classList.add('visible');
  }, 0);
}
function showButtonRemoveIframe(overlay) {
  const iframeWrapper = document.querySelector('.quiz-plugin__iframe-wrapper');
  const button = document.querySelector('.quiz-plugin__button');

  overlay.classList.add('hidden');
  button.classList.remove('hidden');
  iframeWrapper.classList.add('hidden');
  setTimeout(() => {
    iframeWrapper.classList.remove('visible');
    button.classList.add('visible');
  }, 0);
}
function createOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'quiz-plugin__overlay hidden';
  overlay.addEventListener('click', () => showButtonRemoveIframe(overlay));
  document.body.prepend(overlay);
}
function createIframe() {
  const iframe = document.createElement('iframe');
  const iframeWrapper = document.querySelector('.quiz-plugin__iframe-wrapper');
  iframe.setAttribute('src', `${iframeUrl}?scriptName=${currentScript}`);
  iframe.className = 'quiz-plugin__iframe';
  iframeWrapper.prepend(iframe);
}
function setButtonStyles() {
  const promotionButton = document.querySelector(
    'body > header > div.panel > div > ul > li:nth-child(2)'
  );
  const button = document.querySelector('.quiz-plugin__button');
  const likeButton = document.querySelector(
    '.button-circle.button-circle_theme_white.favorite-state__button'
  );

  setTimeout(() => {
    if (button && !button.classList.contains('visible'))
      button.classList.add('visible');
  }, 0);

  if (likeButton && window.innerWidth > 1279) {
    button.removeAttribute('style');
    const likeButtonRect = likeButton.getBoundingClientRect();
    const topPosition = likeButtonRect.top + window.pageYOffset;
    const rightPosition =
      document.documentElement.scrollWidth -
      (likeButtonRect.left + likeButtonRect.width + window.pageXOffset);

    button.style.width = button.style.height = likeButtonRect.width + 'px';
    button.style.top = topPosition + 'px';
    button.style.right =
      rightPosition +
      likeButtonRect.width +
      (0.625 * window.innerWidth) / 100 +
      'px';
  } else if (promotionButton) {
    button.removeAttribute('style');
    button.style.width = promotionButton.offsetWidth + 'px';
    button.style.height = promotionButton.offsetHeight + 'px';
    button.style.left = promotionButton.offsetLeft + 'px';
  } else {
    button.removeAttribute('style');
  }
}
function createButton() {
  const button = document.createElement('button');
  const icon = document.createElement('div');
  const text = document.createElement('p');

  button.className = 'quiz-plugin__button';
  icon.className = 'quiz-plugin__button__icon';
  text.className = 'quiz-plugin__button__text';

  text.innerHTML = 'Акции';
  button.addEventListener('click', () => createIframeHideButton(button));

  button.append(icon);
  button.append(text);
  document.body.prepend(button);
}
function createIframeWrapper() {
  const wrapper = document.createElement('div');

  wrapper.className = 'quiz-plugin__iframe-wrapper hidden';
  document.body.append(wrapper);
}
function listenIframeMessages() {
  window.addEventListener('message', function (event) {
    if (event.origin !== iframeUrl) {
      return;
    }
    switch (event.data) {
      case 'close':
        const overlay = document.querySelector('.quiz-plugin__overlay');
        showButtonRemoveIframe(overlay);
        break;
      case 'scrollBot':
        setTimeout(() => {
          const container = document.querySelector(
            '.quiz-plugin__iframe'
          );
          if (container) container.scrollTop = container.scrollHeight;
        }, 500);
        break;
      case 'scrollTop':
        setTimeout(() => {
          const container = document.querySelector(
            '.quiz-plugin__iframe'
          );
          if (container) container.scrollTop = 0;
        }, 500);
        break;
    }
  });
}
function checkIsButton() {
  const likeButton = document.querySelector(
    '.button-circle.button-circle_theme_white.favorite-state__button'
  );
  const promotionButton = document.querySelector(
    'body > header > div.panel > div > ul > li:nth-child(2)'
  );
  const preloader = document.querySelector('.preloader__bg');

  if (!preloader && (likeButton || promotionButton)) {
    setButtonStyles();

    window.addEventListener('resize', () => {
      setButtonStyles();
    });
  } else {
    setTimeout(() => checkIsButton(), 500);
  }
}
function startScript() {
  createButton();
  checkIsButton();
  createOverlay();
  createIframeWrapper();
  createIframe();
  listenIframeMessages();

  setInterval(() => checkLastElementAndLocateIframe(), 2000);
}

setTimeout(() => startScript(), 1000);
