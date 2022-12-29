function homeTab() {
    const home = document.createElement("div");
    home.classList.add("home");

    const logo = document.createElement("img");
    logo.src = "icons/diner_icon.png";
    logo.alt = "Logo";

    home.appendChild(makeParagraph("食事処 ゆきひら へようこそ"));
    home.appendChild(makeParagraph("Since 2014"));
    home.appendChild(logo);
    home.appendChild(makeParagraph("どうぞおいでください !"));

    return home;
}

// helper
function makeParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHomeTab() {
    const main = document.getElementById("mainBody");
    main.textContent = "";
    main.appendChild(homeTab());
}

export default loadHomeTab;
