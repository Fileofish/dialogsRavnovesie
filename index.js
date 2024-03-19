const iframe = document.createElement('iframe');

iframe.setAttribute('src', 'https://dialogsravnovesiedev.netlify.app/?title=111');
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.position = 'fixed';
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.border = 'none';
iframe.style.zIndex = '1000';
iframe.style.pointerEvents = 'none';

document.body.prepend(iframe);