const iframeUrl = 'https://dialogsravnovesiedeviframe.netlify.app';
const currentScript = 'script1';

function checkLastElementAndLocateIframe() {
  console.log('checkLastElement')
  const iframeWrapper = document.querySelector('.quiz-plugin__iframe-wrapper');
  var lastChild = document.body.lastElementChild;

  if (iframeWrapper !== lastChild) {
    console.log('LocateIframe')
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
  const iframe = document.querySelector('.quiz-plugin__iframe');
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
function setButtonStyles(buttonButton) {
  const likeButton = document.querySelector(
    '.button-circle.button-circle_theme_white.favorite-state__button'
  );

  setTimeout(() => {
    if (buttonButton) buttonButton.classList.add('visible');
  }, 0);

  if (likeButton && window.innerWidth > 1279) {
    const likeButtonRect = likeButton.getBoundingClientRect();
    const topPosition = likeButtonRect.top + window.pageYOffset;
    const rightPosition =
      document.documentElement.scrollWidth -
      (likeButtonRect.left + likeButtonRect.width + window.pageXOffset);

    buttonButton.style.width = buttonButton.style.height =
      likeButtonRect.width + 'px';

    buttonButton.style.top = topPosition + 'px';
    buttonButton.style.right =
      rightPosition +
      likeButtonRect.width +
      (0.625 * window.innerWidth) / 100 +
      'px';
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
  setButtonStyles(button);
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
function startScript() {
  console.log('startScript');
  createButton();
  createOverlay();
  createIframeWrapper();
  createIframe();
  listenIframeMessages();

  setInterval(() => checkLastElementAndLocateIframe(), 2000);
}

startScript();
