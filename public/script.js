// script.js

// Function to handle file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
 
    reader.onload = function(e) {
        document.getElementById('fileContent').textContent = e.target.result;
    };
 
    if (file) {
        reader.readAsText(file);
    }
}

// Function to generate download link
function generateDownloadLink() {
    const content = document.getElementById('fileContent').textContent;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
 
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'download.txt'; // default file name
    downloadLink.textContent = 'Download Generated File';
 
    document.body.appendChild(downloadLink);
}

// Event listeners
document.getElementById('fileUpload').addEventListener('change', handleFileUpload);
document.getElementById('generateLink').addEventListener('click', generateDownloadLink);
