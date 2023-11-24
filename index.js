// index.js
//document refers to the HTML document, Listener listens for a specific event to occur and then executes a callback function.
//This is the event we are listening for. It is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener('DOMContentLoaded', function () {
    const recommendationsSection = document.getElementById('recommendationsSection');
    const locationInput = document.getElementById('location');
    const searchBtn = document.getElementById('searchBtn');

    // Event listener for the search button
    searchBtn.addEventListener('click', function () {
        const location = locationInput.value.trim(); //locationInput.value: Gets the value entered by the user & .trim(): Removes leading and trailing whitespaces from the user input. This ensures that extra spaces are not considered as part of the location.
        // Placeholder recommendation logic
        const recommendation = 'Visit a local park!';

        // Display the recommendation on the webpage
        const recommendationElement = document.createElement('div');//Creates a new div element dynamically using JavaScript. The goal is to dynamically create an HTML element to represent the recommendation on the webpage.
        recommendationElement.classList.add('recommendation');//Adds a CSS class 'recommendation' to the newly created div element. This class could be used for styling purposes.
        recommendationElement.innerHTML = `<p>${recommendation}</p>`;
        recommendationsSection.innerHTML = ''; //Clears any existing content inside the recommendations section. This is done to replace any previous recommendations with the new one.
        recommendationsSection.appendChild(recommendationElement); //Appends the newly created recommendation element (the div with the recommendation text) as a child of the recommendations section. This adds the new recommendation to the page.
    });
});