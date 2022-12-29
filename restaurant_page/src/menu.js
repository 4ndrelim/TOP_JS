function menuTab() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createItem(
            "Egg Souffle",
            "TBA",
        ),
    );

    menu.appendChild(
        createItem(
            "Egg Tempura",
            "TBA",
        ),
    );

    menu.appendChild(
        createItem(
            "Hearty Pork Roast",
            "TBA",
        ),
    );

    // menu.appendChild(
    //     createItem(
    //         "Beef Stew",
    //         "TBA",
    //     ),
    // );

    menu.appendChild(
        createItem(
            "Caveman Specialty",
            "TBA",
        ),
    );

    menu.appendChild(
        createItem(
            "Le Plat Veritable",
            "TBA",
        ),
    );

    menu.appendChild(
        createItem(
            "Chaliapin Steak Don",
            "TBA",
        ),
    );

    menu.appendChild(
        createItem(
            "Furikake Gohan",
            "TBA",
        ),
    );

    menu.appendChild(
        createItem(
            "Souffle Leger de Grace",
            "TBA",
        ),
    );

    return menu;
}

function createItem(name, description) {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `imgs/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;

    item.appendChild(foodImage);
    item.appendChild(foodName);
    item.appendChild(foodDescription);

    return item;
}

function loadMenuTab() {
    const main = document.getElementById("mainBody");
    main.textContent = "";
    main.appendChild(menuTab());
}
export default loadMenuTab;
