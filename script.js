function submitForm(event, programName) {
  event.preventDefault();
  
  // Alert to confirm submission
  alert("✅ " + programName + " application submitted!");

  // Redirect to Thank You page
  window.location.href = 'thankyou.html';

  // Optional: integrate Formspree or Google Sheets for free email/data collection
}
