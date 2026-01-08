document.addEventListener("DOMContentLoaded", () =>{
    const yearSpan = document.getElementById("currentyear");
    yearSpan.textContent = new Date().getFullYear();

    const lastModifiedP = document.getElementById("lastModified");
    
    const modifiedDate = new Date(document.lastModified);
    const formattedDate = modifiedDate.toLocaleString("en-US",{
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    lastModifiedP.textContent = `last updated: ${formattedDate}`;
});