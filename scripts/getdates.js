function updateFooter() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual
  const lastModified = document.lastModified; // Pega a data de última modificação do documento

  document.getElementById('currentyear').textContent = currentYear;
  document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

}

window.onload = updateFooter;