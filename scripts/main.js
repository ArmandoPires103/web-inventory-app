// script.js

function removeCard(cardId) {
    var cardElement = document.getElementById(cardId);
    cardElement.parentNode.removeChild(cardElement);
}

function searchCards() {
    var input, filter, ul, li, cardName, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById('cardList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        cardName = li[i].getElementsByTagName('strong')[0];
        txtValue = cardName.textContent || cardName.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var cardName = document.getElementById('cardName').value;
    var cardPrice = document.getElementById('cardPrice').value;
    var cardStock = document.getElementById('cardStock').value;

    if (cardName && cardPrice && cardStock) {
        var cardList = document.getElementById('cardList');

        var newCard = document.createElement('li');
        newCard.innerHTML =
            `<strong>Name:</strong> ${cardName}
            <br>
            <strong>Price:</strong> $${cardPrice}
            <br>
            <strong>In Stock:</strong> ${cardStock}
            <br>
            <button onclick="removeCard('${cardName.replace(/\s/g, '')}')">Remove</button>`;

        cardList.appendChild(newCard);

        document.getElementById('cardForm').reset();
    }
});
// .values to select