function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header"); // styling later on
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

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    // missing event listener for loadMenu

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    // missing event listener for button

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    return nav;
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
}

export default initializeWebsite;
