const iframeUrl = 'https://dialogsravnovesiedeviframe.netlify.app'
const currentScript = 'script1';

function createIframeHideButton(button) {
  const overlay = document.querySelector('.quiz-plugin__overlay');

  button.classList.remove('visible');
  button.classList.add('hidden');
  overlay.classList.remove('hidden');
  createIframe();
}
function showButtonRemoveIframe(overlay) {
  const iframe = document.querySelector('.quiz-plugin__iframe');
  const button = document.querySelector('.quiz-plugin__button');

  console.log('iframe', iframe);

  overlay.classList.add('hidden');
  button.classList.remove('hidden');
  setTimeout(() => button.classList.add('visible'), 0);
  iframe.remove();
}
function createOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'quiz-plugin__overlay hidden';
  overlay.addEventListener('click', () => showButtonRemoveIframe(overlay));
  document.body.prepend(overlay);
}
function createIframe() {
  const iframe = document.createElement('iframe');
  iframe.setAttribute(
    'src',
    `${iframeUrl}?scriptName=${currentScript}`
  );
  iframe.className = 'quiz-plugin__iframe';
  document.body.prepend(iframe);
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
function listenIframeMessages() {
  window.addEventListener('message', function (event) {
    if (event.origin !== iframeUrl) {
      return;
    }
    switch (event.data) {
      case 'close':
        showButtonRemoveIframe();
        break;
    }
  });
}
function startScript() {
  createButton();
  createOverlay();
  listenIframeMessages();
}

startScript();
