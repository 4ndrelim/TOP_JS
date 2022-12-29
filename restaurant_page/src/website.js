function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    const restaurantName = document.createElement("h1");
    // missing stuff
    header.appendChild(restaurantName);
    header.appendChild(createNav());
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    // missing event listener for loadHomePage
}

function initializeWebsite() {
    const content = document.getElementById("content");
    content.textContent = "hi";
    content.appendChild(createHeader());
}

export default initializeWebsite;
