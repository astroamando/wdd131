// Atualiza o rodapé com o ano atual e a data/hora de última modificação em Mountain Time (Utah)
// Mantive os comentários em português conforme o original
function updateFooter() {
  // Pega o ano atual
  const currentYear = new Date().getFullYear();

  // Gera a data/hora atual no fuso de Mountain Time (Utah) em inglês (MM/DD/YYYY HH:MM:SS)
  const now = new Date();
  const lastModifiedUtah = now.toLocaleString("en-US", {
    timeZone: "America/Denver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  // Atualiza os elementos no DOM (certifique-se que existam elementos com esses IDs no HTML)
  const yearEl = document.getElementById("currentyear");
  if (yearEl) yearEl.textContent = currentYear;

  const lastEl = document.getElementById("lastModified");
  if (lastEl) lastEl.textContent = `Last Modification: ${lastModifiedUtah} (Mountain Time)`;
}

// Usa DOMContentLoaded para garantir que os elementos existam antes de tentar atualizá-los
document.addEventListener("DOMContentLoaded", updateFooter);