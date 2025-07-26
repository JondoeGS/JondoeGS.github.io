// Toggles the collapsible ☰ menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

// Formats numbers using user's locale (e.g., 1,000 vs 1.000)
function formatNumber(value) {
  const userLocale = navigator.language || 'en-US';
  return new Intl.NumberFormat(userLocale).format(value);
}

// Simple tab switcher
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}