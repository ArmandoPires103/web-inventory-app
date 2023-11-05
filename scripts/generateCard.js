// Function to create a new card element
function createCard(name, sport, year, image, price, inStock) {
    // Create a new card element
    const li = document.createElement("li");
    li.classList.add("singleItem");

    // Create an image element and set its attributes
    const img = document.createElement("img");
    img.src = image;
    img.alt = `${name} Card`;
    li.appendChild(img);

    // Append other card details
    li.innerHTML += `
        <br>
        <strong>Card Name:</strong> ${name}
        <br>
        <strong>Sport:</strong> ${sport}
        <br>
        <strong>Year:</strong> ${year}
        <br>
        <strong>Condition:</strong> (New)
        <br>
        <strong>Price:</strong> $${price}
        <br>
        <button class="remove">Remove Item</button>
    `;

    // Append the new card to the card list
    const cardList = document.querySelector(".all-cards ul");
    cardList.appendChild(li);
}

// Function to generate a new card using the createCard function
function generateCard(name, sport, year, image, price, inStock) {
    console.log("Values from form:", name, sport, year, image, price, inStock);
    createCard(name, sport, year, image, price, inStock);
}

// Additional code to handle removing items if needed
const allItems = document.querySelectorAll(".remove");

allItems.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.closest('.singleItem').remove();
    });
});