const button = document.createElement('button');

button.innerHTML = 'Hi!';
button.style.position = 'fixed';
button.style.top = '0';
button.style.right = '0';
button.style.width = '100px';
button.style.height = '100px';

button.addEventListener('click', () => alert('Hi!'));

document.body.prepend(button);

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
