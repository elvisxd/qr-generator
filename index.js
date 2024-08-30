function generateQRCode() {
    const text = document.getElementById('text-input').value;
    if (!text.trim()) return;
    const qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = '';
    new QRCode(qrCodeContainer, text);
    qrCodeContainer.style.display = 'block';
    document.getElementById('download-btn').style.display = 'block';

}

function downloadQRCode() {
    const qrCodeContainer = document.getElementById('qr-code').querySelector('img');
    if (qrCodeContainer) {
        const qrCodeURL = qrCodeContainer.src;
        const link = document.createElement('a');
        link.href = qrCodeURL;
        link.download = 'qr-code.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('No QR code found to download.');
    }
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


