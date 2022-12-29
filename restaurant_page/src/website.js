import loadHomeTab from "./home";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Yukihira's Diner";

    header.appendChild(restaurantName);
    header.appendChild(createNav());
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const homeButton = document.createElement("button");
    homeButton.setAttribute("id", "homeButton");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHomeTab();
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        // call menuTab();
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        // call contactTab();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

function createMainBody() {
    const mainBody = document.createElement("main");
    // styling for main
    mainBody.setAttribute("id", "mainBody");
    return mainBody;
}

function createFooter() {
    const footer = document.createElement("footer");
    // styling for footer
    const someText = document.createElement("p");
    someText.textContent = "footer";
    footer.appendChild(someText);
    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMainBody());
    content.appendChild(createFooter());

    setActiveButton(document.getElementById("homeButton"));
    loadHomeTab();
}

export default initializeWebsite;
