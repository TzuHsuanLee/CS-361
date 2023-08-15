/* Search by name */
function searchDogs() {
    let input, target, dogsTable;
    input = document.getElementById('search-bar');
    target = input.value.toLowerCase();
    dogsTable = document.getElementById('dog-table');

    // Iterate through all dogs
    for (let i = 0, row; row = dogsTable.rows[i]; i++) {
        for (let j = 0, cell; cell = row.cells[j]; j++) {
            // Display dogs with matching names
            if (cell.getAttribute('dog-name').includes(target)) {
                cell.style.display = '';
            }
            // Hide dogs with non-matching names
            else {
                cell.style.display = 'none';
            }
        }
    }
}

/* Filter by status */
function filterDogs(status) {
    let target, dogsTable;
    target = status.value;
    dogsTable = document.getElementById('dog-table');

    // Iterate through all dogs
    for (let i = 0, row; row = dogsTable.rows[i]; i++) {
        for (let j = 0, cell; cell = row.cells[j]; j++) {
            // Display dogs with matching statuses
            if (target === 'all' || cell.getAttribute('dog-status') === target) {
                cell.style.display = '';
            }
            // Hide dogs with non-matching statuses
            else {
                cell.style.display = 'none';
            }
        }
    }
}
