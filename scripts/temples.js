const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen);

  menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;