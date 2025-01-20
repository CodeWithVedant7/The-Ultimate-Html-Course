document.addEventListener('DOMContentLoaded', function() {
    // Logo fade-in animation
    const logo = document.querySelector('.Zomato_logo img');
    const description = document.querySelector('.Zomato_logo p');
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    // Add 'fadeIn' class to elements on page load
    logo.classList.add('fadeIn');
    description.classList.add('fadeIn');
    searchInput.classList.add('fadeIn');
    searchButton.classList.add('fadeIn');

    // Optional: Add a simple console log when the search button is clicked
    searchButton.addEventListener('click', function() {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            console.log(`Searching for: ${searchQuery}`);
            // Here you can implement search functionality (e.g., redirect to search results page)
        } else {
            alert('Please enter a search query!');
        }
    });
});
