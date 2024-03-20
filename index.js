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
    'body > header > div.panel > div > ul > li:nth-child(2) > a'
  );
  const button = document.querySelector('.quiz-plugin__button');
  const likeButton = document.querySelector(
    '.button-circle.button-circle_theme_white.favorite-state__button'
  );

  console.log(promotionButton);

  setTimeout(() => {
    if (button && !button.classList.contains('visible'))
      button.classList.add('visible');
  }, 0);

  if (likeButton && window.innerWidth > 1279) {
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
    const promotionButtonRect = likeButton.getBoundingClientRect();
    console.log(promotionButtonRect);
    const topPosition = promotionButtonRect.top + window.pageYOffset;
    const rightPosition =
      document.documentElement.scrollWidth -
      (promotionButtonRect.left +
        promotionButtonRect.width +
        window.pageXOffset);

    button.style.width = promotionButtonRect.width + 'px';
    button.style.height = promotionButtonRect.height + 'px';
    button.style.top = topPosition + 'px';
    button.style.right = rightPosition + promotionButtonRect.width + 'px';
  } else {
    button.removeAttribute('style');
  }
}
function createButton() {
  const button = document.createElement('button');
  const icon = document.createElement('div');

  button.className = 'quiz-plugin__button';
  icon.className = 'quiz-plugin__button__icon';

  button.addEventListener('click', () => createIframeHideButton(button));

  button.append(icon);
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
    }
  });
}
function checkIsButton() {
  const likeButton = document.querySelector(
    '.button-circle.button-circle_theme_white.favorite-state__button'
  );

  if (likeButton || window.innerWidth < 1280) {
    setButtonStyles();
  } else {
    setTimeout(() => checkIsButton(), 500);
  }
}
function startScript() {
  console.log('startScript');
  createButton();
  checkIsButton();
  createOverlay();
  createIframeWrapper();
  createIframe();
  listenIframeMessages();

  window.addEventListener('resize', () => {
    setButtonStyles();
  });
  setInterval(() => checkLastElementAndLocateIframe(), 2000);
}

setTimeout(() => startScript(), 1000);
