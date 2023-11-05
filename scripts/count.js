let count = 4

function addCount(currentCount) {
    const span = document.querySelector('.card-count');
    span.textContent = `(${currentCount})`;
}

function subtractCount() {
   if (count > 0) {
    count --;
    addCount(count);
   }
}