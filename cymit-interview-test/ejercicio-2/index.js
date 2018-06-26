// My Google API Key
var API_KEY = 'AIzaSyACGwKf5UcvrS3E7ZdECH3h5hvWtraplDs'

// Get location form
var locationForm = document.getElementById('location-form');

// Listen for submit
locationForm.addEventListener('submit', addressParser);

/**
 * This function sends a request using axios to the Geocode Google API, and returns a long JSON string with different objects containing data.
 * 
 * I replaced all special characters and blank spaces in order to adapt the direction string into a regular URL syntax.
 * 
 * To run the function from Node.js --> node index.js
 */
function addressParser(e) {
    e.preventDefault();

    var location = document.getElementById('location-input').value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            // address: `${direction3.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "+")}`,
            address: location,
            key: API_KEY
        }
    })
        .then(function (response) {

            var formattedAddressOutput = `
        <ul class="list-group">
          <li class="list-group-item">Calle y número: ${response.data.results[0].address_components[1].long_name} ${response.data.results[0].address_components[0].long_name}</li>
          <li class="list-group-item">Código postal: ${response.data.results[0].address_components[6].long_name}</li>
          <li class="list-group-item">Ciudad: ${response.data.results[0].address_components[2].long_name}</li>
          <li class="list-group-item">País: ${response.data.results[0].address_components[5].long_name}</li>
        </ul>
      `;
            document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
        })
        .catch(function (error) {
            console.log(error);
        });
}


