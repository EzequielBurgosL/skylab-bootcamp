
// logic.retrieveUser('EzequielBurgosL')
//     .then(response => {
//         var user = `
//         <ul class="list-group">
//         <li class="list-group-item">Calle y número: ${response.data.results[0].address_components[1].long_name} ${response.data.results[0].address_components[0].long_name}</li>
//         <li class="list-group-item">Código postal: ${response.data.results[0].address_components[6].long_name}</li>
//         <li class="list-group-item">Ciudad: ${response.data.results[0].address_components[2].long_name}</li>
//         <li class="list-group-item">País: ${response.data.results[0].address_components[5].long_name}</li>
//         </ul>
//         `;
//         document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
