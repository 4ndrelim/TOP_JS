function menuTab() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createItem(
            "Egg Souffle",
            "Soft, springy and bouncy mini soufflé omelette",
        ),
    );

    menu.appendChild(
        createItem(
            "Egg Tempura",
            "Deep-fried frozen egg in tempura batter over rice",
        ),
    );

    menu.appendChild(
        createItem(
            "Hearty Pork Roast",
            "Impossible meat.",
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
            "Fusion ground meat dish - House's Specialty",
        ),
    );

    menu.appendChild(
        createItem(
            "Le Plat Veritable",
            "Squid in peanut butter fancy-fied",
        ),
    );

    menu.appendChild(
        createItem(
            "Chaliapin Steak Don",
            "Steak donburi",
        ),
    );

    menu.appendChild(
        createItem(
            "Furikake Gohan",
            "Eggs covered with a golden coating using chilled chicken broth to create a golden jewel",
        ),
    );

    menu.appendChild(
        createItem(
            "Souffle Leger de Grace",
            "Fluffiness of souffle with red bean paste centre of dorayaki",
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
