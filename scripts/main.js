const newCardForm = document.getElementById("new-card");
newCardForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Get values from the form
    const name = document.getElementById("name").value;
    const sport = document.getElementById("sport").value;
    const year = document.getElementById("year").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    const inStock = document.getElementById("inStock").value;

    // Call the function to generate a new card
    generateCard(name, sport, year, image, price, inStock);

    form.reset();
});

