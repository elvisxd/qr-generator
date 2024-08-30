function generateQRCode() {
    const text = document.getElementById('text-input').value;
    if (!text.trim()) return;
    const qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = '';
    new QRCode(qrCodeContainer, text);
    qrCodeContainer.style.display = 'block';

}

const words = [
    'Hi, I am a Web Developer',
    'I love to code',
    'VISIT MY PORTFOLIO',
    'I am a Software Engineer',
    'Contact me for any queries',
];

let part = '',
    i = 0,
    offset = 0,
    forwards = true,
    skipCount = 0,
    skipDelay = 15,
    speed = 100;

const wordflick = () => {
    setInterval(() => {
        if (forwards) {
            if (offset >= words[i].length) {
                skipCount++;
                if (skipCount === skipDelay) {
                    forwards = false;
                    skipCount = 0;
                }
            }
        } else {
            if (offset === 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= words.length) {
                    i = 0;
                }
            }
        }

        part = words[i].substring(0, offset);
        if (skipCount === 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }

        document.querySelector('.word').textContent = part;
    }, speed);
};

document.addEventListener('DOMContentLoaded', () => {
    wordflick();
});
