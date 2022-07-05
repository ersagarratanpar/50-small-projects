const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 30 - length * 3;

    background.style.filter = `blur(${blurValue}px)`;
})