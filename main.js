let body = document.body;
console.log(body);
let element = document.createElement("div");
let overlay = body.appendChild(element);
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
overlay.classList.add('overlayDarkMode');