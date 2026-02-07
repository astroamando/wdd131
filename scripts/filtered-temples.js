const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: " August 7, 2005",
    area: 11500,
    imageUrl:
    "./images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: " May 21, 1888",
    area: 74792,
    imageUrl:
    "./images/manti-temple-2.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: " June 7, 2015",
    area: 96630,
    imageUrl:
    "./images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: " May 2, 2020",
    area: 6861,
    imageUrl:
    "./images/yigo_guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "November 19, 1974",
    area: 156558,
    imageUrl:
    "./images/washington_dc.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "January 10, 1986",
    area: 9600,
    imageUrl:
    "./images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "December 2, 1983",
    area: 116642,
    imageUrl:
    "./images/mexico-city-temple.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "April 6, 1893",
    area: 253015,
    imageUrl:
    "./images/salt_lake_temple.jpeg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 40000,
    imageUrl:
    ".images/Rome-Temple.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "April 6, 1877",
    area: 110000,
    imageUrl:
    "./images/st-george-temple.jpg"
  }
];

function createTempleCard(filteredTemples) {
    const resGrid = document.querySelector("#res-grid");
    resGrid.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("figure");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        let caption = document.createElement("figcaption");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy"); 
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(img);
        
        caption.appendChild(location);
        caption.appendChild(dedication);
        caption.appendChild(area);
        
        card.appendChild(caption);
        
        resGrid.appendChild(card);
    });
}

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");
const mainHeader = document.querySelector("#main-header");

function updateDisplay(title, templesToShow, activeLink) {
    mainHeader.textContent = title;
    createTempleCard(templesToShow);
    
    document.querySelectorAll(".navigation a").forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}

homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    updateDisplay("Home - All Temples", temples, homeLink);
});

oldLink.addEventListener("click", (e) => {
    e.preventDefault();
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900);
    updateDisplay("Old Temples (Built before 1900)", oldTemples, oldLink);
});

newLink.addEventListener("click", (e) => {
    e.preventDefault();
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000);
    updateDisplay("New Temples (Built after 2000)", newTemples, newLink);
});

largeLink.addEventListener("click", (e) => {
    e.preventDefault();
    const largeTemples = temples.filter(temple => temple.area > 90000);
    updateDisplay("Large Temples (>90k sq ft)", largeTemples, largeLink);
});

smallLink.addEventListener("click", (e) => {
    e.preventDefault();
    const smallTemples = temples.filter(temple => temple.area < 10000);
    updateDisplay("Small Temples (<10k sq ft)", smallTemples, smallLink);
});

/*Event listeners*/
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

/*Initialization*/
createTempleCard(temples);