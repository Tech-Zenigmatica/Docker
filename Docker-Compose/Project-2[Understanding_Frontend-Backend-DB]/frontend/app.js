document.getElementById('detailsForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/submit-details', {  // Use the relative URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Details submitted successfully!');
    } else {
      alert('Error submitting details.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Network error.');
  }
});

