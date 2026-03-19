function buildQuoteMessage() {
  const fields = {
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    brand: document.getElementById('brand').value.trim(),
    model: document.getElementById('model').value.trim(),
    vehicleType: document.getElementById('vehicleType').value,
    notes: document.getElementById('notes').value.trim()
  };

  const lines = [
    'Hello SSB Covers, I would like a quote.',
    '',
    `Name: ${fields.name || 'Not provided'}`,
    `Phone: ${fields.phone || 'Not provided'}`,
    `Vehicle type: ${fields.vehicleType}`,
    `Brand: ${fields.brand || 'Not provided'}`,
    `Model: ${fields.model || 'Not provided'}`,
    `Notes: ${fields.notes || 'None'}`
  ];

  return encodeURIComponent(lines.join('\n'));
}

function updateQuoteLinks() {
  const message = buildQuoteMessage();
  const whatsapp = document.getElementById('whatsappQuote');
  const email = document.getElementById('emailQuote');

  whatsapp.href = `https://wa.me/27721830573?text=${message}`;
  email.href = `mailto:info@ssbcovers.co.za?subject=SSB%20Covers%20Quote%20Request&body=${message}`;
}

const form = document.getElementById('quoteForm');
if (form) {
  form.addEventListener('input', updateQuoteLinks);
  updateQuoteLinks();
}
