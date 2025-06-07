// Download PDF function
function downloadPDF() {
  const select = document.getElementById('pdf-select');
  const pdf = select.value;
  if (pdf) {
    window.open('pdfs/' + pdf, '_blank'); // Assumes PDFs are in a folder named 'pdfs'
  } else {
    alert('Please select a PDF to download.');
  }
}

// Toggle "Learn More" section
function toggleLearnMore() {
  const learnMore = document.getElementById('learn-more');
  if (learnMore.style.display === 'none' || learnMore.style.display === '') {
    learnMore.style.display = 'block';
  } else {
    learnMore.style.display = 'none';
  }
}

// Toggle detailed Coffee History
function toggleCoffeeHistory() {
  const historyDetails = document.getElementById('coffee-history-details');
  if (historyDetails.style.display === 'none' || historyDetails.style.display === '') {
    historyDetails.style.display = 'block';
  } else {
    historyDetails.style.display = 'none';
  }
}

// Optional: Hide loading screen after page loads
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
