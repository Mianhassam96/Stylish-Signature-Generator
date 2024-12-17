// Get all the necessary DOM elements
const nameInput = document.getElementById('nameInput');
const fontSelector = document.getElementById('fontSelector');
const fontSizeInput = document.getElementById('fontSize');
const colorPicker = document.getElementById('colorPicker');
const boldCheckbox = document.getElementById('boldCheckbox');
const italicCheckbox = document.getElementById('italicCheckbox');
const generateButton = document.getElementById('generateButton');
const clearButton = document.getElementById('clearButton');
const downloadPNGButton = document.getElementById('downloadPNG');
const signatureCanvas = document.getElementById('signatureCanvas');
const ctx = signatureCanvas.getContext('2d');

// Set canvas size and default styling
signatureCanvas.width = 500;
signatureCanvas.height = 150;

// Function to generate the signature
function generateSignature() {
    const name = nameInput.value.trim(); // Get the input value
    if (!name) {
        alert("Please enter a name to generate the signature.");
        return;
    }

    // Clear the canvas
    ctx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);

    // Get font style and settings
    const selectedFont = fontSelector.value;
    const fontSize = fontSizeInput.value;
    const fontColor = colorPicker.value;
    const isBold = boldCheckbox.checked;
    const isItalic = italicCheckbox.checked;

    // Create the font style string
    const fontStyle = `${isItalic ? 'italic ' : ''}${isBold ? 'bold ' : ''}${fontSize}px ${selectedFont}`;
    ctx.font = fontStyle;
    ctx.fillStyle = fontColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw the text on the canvas
    ctx.fillText(name, signatureCanvas.width / 2, signatureCanvas.height / 2);
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    nameInput.value = '';
    fontSizeInput.value = 40;
    colorPicker.value = '#000000';
    boldCheckbox.checked = false;
    italicCheckbox.checked = false;
    fontSelector.selectedIndex = 0;
}

// Function to download the signature as a PNG
function downloadSignature() {
    const link = document.createElement('a');
    link.download = 'signature.png'; // Set the download file name
    link.href = signatureCanvas.toDataURL('image/png'); // Get the canvas data as PNG
    link.click(); // Trigger the download
}

// Add event listeners for the buttons
generateButton.addEventListener('click', generateSignature);
clearButton.addEventListener('click', clearCanvas);
downloadPNGButton.addEventListener('click', downloadSignature);
