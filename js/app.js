// Get the 'id' parameter of the URL
const urlParams = new URLSearchParams(window.location.search);
const speciesId = urlParams.get('id');

console.log('Species ID:', speciesId)

// Get the data for this species
const species = speciesData[speciesId];

console.log('Species data', species);

// Check if the species exist
if (!species){
    document.body.innerHTML = '<h1>Species not found</h1><p>This species does not exist in our database.</p>'
} else {
    // Fill the HTML elements with the species data
    document.getElementById('species-name').textContent = species.name;
    document.getElementById('species-image').src = species.image;
    document.getElementById('scientific-name').textContent = species.scientificName;
    document.getElementById('size').textContent = species.size;
    document.getElementById('weight').textContent = species.weight;
    document.getElementById('habitat').textContent = species.habitat;
    document.getElementById('conservation-status').textContent = species.conservationStatus;
    document.getElementById('threats').textContent = species.threats;
    document.getElementById('actions').textContent = species.actions;
    document.getElementById('anecdote').textContent = species.anecdote;
    document.getElementById('link-green-it').textContent = species.linkGreenIT
};

